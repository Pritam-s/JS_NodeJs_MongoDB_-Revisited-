// Read the Query String

// The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

// This object has a property called "url" which holds the part of the url that comes after the domain name:

var http = require('http');
http.createServer(function(req, res){
    res.write(req.url);
    res.end();
}).listen(80);

// Now open the browser and visit the localhost, you'll see a slash. Now put a string after the 'localhost' in the url. example :- localhost/summer, localhost/batman.
// You'll see the URL string summer and batman fetched inside the browser.