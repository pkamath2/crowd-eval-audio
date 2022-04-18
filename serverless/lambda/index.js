// Code based on this tutorial - https://awsauroralabsmy.com/win/ams-srvless-data-api/ 
const AWS = require('aws-sdk')
const rdsDataService = new AWS.RDSDataService()

exports.handler = (event, context, callback) => {
  
  console.log('HTTP API Request Parameter Check: worker_id == '+event.worker_id);

  sqlStr = "select * from worker_log where worker_id = '"+event.worker_id+"'"
  console.log("Formatted SQL:" + sqlStr);

  let sqlParams = {
    secretArn: '<Your Secret ARN>',
    resourceArn: '<Your Resource ARN>',
    sql: sqlStr,
    database: '<Your DB Name>',
    includeResultMetadata: true
  }

  // run SQL command
  rdsDataService.executeStatement(sqlParams, function (err, data) {
    if (err) {
      console.log(err)
      callback('Query Failed')
    } else {
      var rows = []
      var cols =[]
      data.columnMetadata.map((v, i) => {
        cols.push(v.name)
      });
      data.records.map((r) => {
        var row = {}
        r.map((v, i) => {
          if (v.stringValue !== "undefined") { row[cols[i]] = v.stringValue; }
          else if (v.blobValue !== "undefined") { row[cols[i]] = v.blobValue; }
          else if (v.doubleValue !== "undefined") { row[cols[i]] = v.doubleValue; }
          else if (v.longValue !== "undefined") { row[cols[i]] = v.longValue; }
          else if (v.booleanValue !== "undefined") { row[cols[i]] = v.booleanValue; }
          else if (v.isNull) { row[cols[i]] = null; }
        })
        rows.push(row)
      })
      console.log('Found rows: ' + rows.length)
      callback(null, rows)
    }
  })
}