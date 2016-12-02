//Microsoft Cognitive API Call
// API URL : https://api.projectoxford.ai/emotion/v1.0/recognize?
var fs = require('fs');
var url = require('url');
var http = require('https');
var util = require('util');

var returnData = [];
var rawImageData = '';
var decodedImage = '';


fs.readFile('local.jpg', function(err, data){
    var myArray = new Buffer(data); 
    var longInt8View = new Uint8Array(myArray);
        for (var i=0; i<data.length; i++){
            longInt8View[i] = data[i];
        } 
    jbCallback(myArray);
});

function jbCallback(e) {
    post_req.write(e);
    post_req.end();
}




var parsedURL = url.parse("https://api.projectoxford.ai/emotion/v1.0/recognize");
var options = {
    host: parsedURL.host,
    path: '/emotion/v1.0/recognize',
    // processData: false,
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': "e1c8d985f4e04a5aa7703cd3e8b0e38d",
        // 'Content-Length': myArray.length,
    },
    // data:{
    //     mimeType: 'application/octet-stream',
    //     params:rawImageData
    // }
};

var post_req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.on('data', function (responseBody) {
        // console.log(responseBody.toString('utf-8'));
        console.log('BODY: ' + util.inspect(responseBody, {showHidden: false, depth: null}));
        // console.log(responseBody);
        // console.log(JSON.stringify(responseBody));
        // Do your processing post async response
    });
});

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
 

