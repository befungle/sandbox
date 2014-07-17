var http = require("http");
var url = require("url");
var io = require('socket.io');
var fs = require('fs');
var querystring=require("querystring");

function start(routes, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        routes(handle, pathname, response, request);
        /*  commenting basic form data processing
        request.setEncoding("utf8");


        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+ postDataChunk + "'.");
        });
        request.addListener("end", function() {
            routes(handle, pathname, response, postData);
        });*/
    }
    var server = http.createServer(onRequest);
    server.listen(8001);
    var ios = io.listen(server);
    ios.sockets.on('connection', function(socket){
        socket.emit('message', {'message': 'Getting Started'});
        setInterval(function(){
            socket.emit('date', {'date': new Date()});
        }, 1000);

        socket.on('client_data', function(data){
            process.stdout.write(data.letter);
        });
    });
    console.log("Server has started.");
}


exports.start = start;
