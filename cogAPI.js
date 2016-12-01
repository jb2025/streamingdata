//Change httpGetAsync function to send URL instead of raw image
//in order for it to work, change type ot octet-stream
//Microsoft Cognitive API Call
// API URL : https://api.projectoxford.ai/emotion/v1.0/recognize?
// no port assignment

// var faceData = [];
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var fs = require('fs');
// var xmlHttp = new XMLHttpRequest();

// Unsure how to create the right buffer / stream of data
var rawImageData = fs.readFileSync('local.jpg');

var http = require('http');
var util = require('util');
var options = {
    host: 'https://api.projectoxford.ai',
    path: '/emotion/v1.0/recognize?',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': "e1c8d985f4e04a5aa7703cd3e8b0e38d"
    },
    postData:{
        mimeType: 'application/octet-stream',
        params:rawImageData
    }
};

http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.on('data', function (responseBody) {
        console.log('BODY: ' + util.inspect(responseBody, {showHidden: false, depth: null}));
        // Do your processing post async response
    });
}).end();

// function httpGetAsync(theUrl)
// {
//     xmlHttp.responseType = "application/json";
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback();
//     };
//     xmlHttp.open("POST", theUrl, true); // true for asynchronous 
//     xmlHttp.setRequestHeader("Content-Type","application/octet-stream");
//     xmlHttp.setRequestHeader("Ocp-Apim-Subscription-Key","e1c8d985f4e04a5aa7703cd3e8b0e38d");
//     xmlHttp.send(rawImageData);
// }

// function callback() {
//     // // var parsedJSON = JSON.parse(xmlHttp.responseText);
//     // fs.appendFileSync('mnt/sda1/data.json', xmlHttp.responseText);
//     // // var anger = parsedJSON[0].scores.anger;
//     // // var contempt = parsedJSON[0].scores.contempt;
//     // // var disgust = parsedJSON[0].scores.disgust;
//     // // var fear = parsedJSON[0].scores.fear;
//     // // var happiness = parsedJSON[0].scores.happiness;
//     // // var neutral = parsedJSON[0].scores.neutral;
//     // // var sadness = parsedJSON[0].scores.sadness;
//     // // var surprise = parsedJSON[0].scores.surprise;
//     // // var date = new Date();

// }

// httpGetAsync('https://api.projectoxford.ai/emotion/v1.0/recognize?');
 

