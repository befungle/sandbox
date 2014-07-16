function route(handle,pathname,response,request) {
    console.log('Routing initiated for '+pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response,request);
    } else {
        console.log("No request found");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;