var http = require("http");
var url = require("url");
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
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}


exports.start = start;
