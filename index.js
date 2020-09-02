// primary file of the API

//Dependencies
var http = require("http");
var url = require("url");
var stringDecoder = require("string_decoder").StringDecoder;

//the server should respond to all requests with a string
var server = http.createServer(function (req, res) {

  // get the url and parse it.
  var parsedUrl = url.parse(req.url, true);

  // get the path
  // Untrimmed path
  var path = parsedUrl.pathname;
  //Trimmed path
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  //get the query strings as an object
  var queryStringObject = parsedUrl.query;

  //get the Http method that user requested
  var method = req.method.toLowerCase();

  //get the headers as an object
  var header = req.headers;

  //Create the payloads
  // this is how we handle streams in NodeJS
  var decoder = new stringDecoder("utf-8");
  var buffer = '';
  req.on("data", function (data) {
    buffer += decoder.write(data);
  });

  //end the request data
  req.on("end", function () {
    buffer += decoder.end();

    // send the response
    res.end("hello world\n");

    // log the request path
    console.log("Request is received on this path: " + trimmedPath + " with method: " + method + " with this query string: ", queryStringObject);
    console.log("with the following headers: ", header);
    console.log("request received with this payloads: ", buffer);
  });

});

//start the server, and have it listen on port 3000
server.listen(3000, function () {
  console.log("the server is listening on port 3000");
});
