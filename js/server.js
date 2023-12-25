const fs = require('fs');
var express = require('express');
var app = express();

var port = 3000;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

    // check if the request action is generateCode
    if (z["action"] == "save") {
        // json data
        var jsonData = '{"user":[{"name":"' + z['name'] + '","password":"' + z['password'] + '"}]}';

        // parse json
        var jsonObj = JSON.parse(jsonData);
        //console.log("jsonObj: " + jsonObj);

        // stringify JSON Object
        var jsonContent = JSON.stringify(jsonObj);
        //console.log("jsonContent: " + jsonContent);

        // file system module to perform file operations
        fs.appendFile("users.json", jsonContent, err => {
            if (err) {
                res.send("Error writing data in json.");
                throw err
            };

            console.log("JSON file has been saved.");
        });

        var jsontext = JSON.stringify({
            'action': 'save',
            'msg': 'Data saved!!!'
        });
        //console.log(jsontext);
        res.send(jsontext);
    }
    else {
        res.send(JSON.stringify({ 'msg': 'error!!!' }));
    }
}).listen(port);
console.log("Server is running! (listening on port " + port + ")");