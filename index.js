// primary file of the API

//Dependencies
var http = require("http");
var url = require("url");

//the server should respond to all requests with a string
var server = http.createServer(function (req, res) {

  // get the url and parse it.
  var parsedUrl = url.parse(req.url, true);

  // get the path

  // send the response
  res.end("hello world\n");

  // log the request path
  
});

//start the server, and have it listen on port 3000
server.listen(3000, function () {
  console.log("the server is listening on port 3000");
});
