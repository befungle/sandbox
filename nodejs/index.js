var server = require("./server");
var routes = require("./routes");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/socket"] = requestHandlers.socket;

server.start(routes.route, handle);
#test