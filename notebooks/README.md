# Crowd-Eval-Audio Framework AWS API

These set of notebooks help setup listening test experiments on Amazon's Mechanical Turk.   

* As a first step, we will need credentials to access AMT API. Please follow instructions here to retrieve them - https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMechanicalTurkGettingStartedGuide/SetUp.html   
* Next, create a ```secrets.json``` under this ```notebooks``` directory using the credentials from the previous step - 
```
{
    "aws_access_key_id":"<your key>",
    "aws_secret_access_key":"<your secret>"
}
```   
* Use the ```aws-createhit.ipynb``` to create new qualifiers (screening tests) and HITs; ```aws-listassignments.ipynb``` to retrieve all participant responses and ```aws-approveassignments.ipynb``` to approve (or reject) them. 

