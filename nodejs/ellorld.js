var http = require("http");
var url = require("url");
var query = require('querystring');
function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

function route(pathname) {
    console.log('Routing initiated for '+pathname)
}
exports.start = start;
exports.route = route;