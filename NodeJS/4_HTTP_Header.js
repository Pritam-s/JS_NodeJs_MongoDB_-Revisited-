// Add an HTTP Header
// If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type.
// Always use Template literal to serve this HTML

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/html'}); //The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NodeJs --> HTTP_Header</title>
    </head>
    <body>
        <h2>This is the NodeJs HTTP header
        </h2>
        <ol>
            <li>If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type.</li>
            <li>You can write any HTML inside res.write().</li>
            <li><h3>NOTE :- Make sure to use template literal to serve this HTML.</h3></li>
        </ol>
    </body>
    </html>
    `);
    res.end();
}).listen(80);