// Code based on this tutorial - https://awsauroralabsmy.com/win/ams-srvless-data-api/ 
const AWS = require('aws-sdk');
const rdsDataService = new AWS.RDSDataService();

exports.handler = (event, context, callback) => {
  
  console.log('HTTP API Request Parameter Check: worker_id == '+event.worker_id);
 
  let sqlStr = "select * from worker_log where worker_id = '"+event.worker_id+"'";
  console.log("Formatted SQL:" + sqlStr);

  let sqlParams = {
    secretArn: '<Your Secret ARN>',
    resourceArn: '<Your Resource ARN>',
    sql: sqlStr,
    database: '<Your DB Name>',
    includeResultMetadata: true
  };
  rdsDataService.executeStatement(sqlParams, function (err, data) {
    if (err) {
      console.log(err);
      callback('Query Failed');
    } else {
      console.log('Length of records == '+data.records.length)
      callback(null, data.records.length)
    }
  })
}