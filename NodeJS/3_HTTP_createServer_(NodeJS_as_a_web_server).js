// NodeJs as as Web Server
// Visit the documentation of NodeJS for Guides and syntax documentation
// A better version of this example is present in official documentation of NodeJS
// visit https://nodejs.org/en/docs/guides/getting-started-guide/


console.log(`The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.`)

// Use the createServer() method to create an HTTP server.
// You can see the result on the browser localhost 
var http = require('http')

http.createServer(function(req, res){
    res.write('Hello world'); // write a response to the client
    res.end(); // end the response
}).listen(80); //The server object listens on port 80
