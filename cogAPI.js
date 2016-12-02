//Microsoft Cognitive API Call
// API URL : https://api.projectoxford.ai/emotion/v1.0/recognize?
var fs = require('fs');
var url = require('url');
var image_original = 'local.jpg';
var rawImageData = '';
// var decodedImage = '';
// var binaryImage = '';
// var decodedImage = '';
// fs.readFile(image_original, function(err, original_data){
//     // decodedImage = new Buffer(original_data, 'binary').toString('binary');
//     decodedImage = original_data.toString('binary');
//     console.log(decodedImage);
//     jbCallback(decodedImage);
//     // binaryImage = new Buffer(decodedImage,'binary');
//     // console.log(binaryImage);
//     // fs.writeFile('image_decoded.jpg', decodedImage, function(err) {});
// });

fs.readFile('local.jpg', (err, data) =>{ 
    if (err) throw err;
    rawImageData = new Buffer(data.toString('base64'),'base64');
    console.log(rawImageData);
    jbCallback(data);
});

// fs.readFile('local.jpg', function(err, data){
//     var myArray = new ArrayBuffer(data.length);
//     var longInt8View = new Uint8Array(myArray);
//         for (var i=0; i< longInt8View.length; i++){
//         longInt8View[i] = i % 255;
//         }   // rawImageData = new Uint8Array(data);
//     console.log(myArray);
//     jbCallback(myArray);
// });


function jbCallback(e) {
    post_req.write(e);
    post_req.end();
};



var http = require('https');
var util = require('util');
var parsedURL = url.parse("https://api.projectoxford.ai/emotion/v1.0/recognize");
console.log(rawImageData);
var options = {
    host: parsedURL.host,
    path: '/emotion/v1.0/recognize',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': "e1c8d985f4e04a5aa7703cd3e8b0e38d",
        'Content-Length': rawImageData.length,
    },
    // data:{
    //     mimeType: 'application/octet-stream',
    //     params:rawImageData
    // }
};

var post_req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.on('data', function (responseBody) {
        console.log('BODY: ' + util.inspect(responseBody, {showHidden: false, depth: null}));
        console.log(responseBody);
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
 

