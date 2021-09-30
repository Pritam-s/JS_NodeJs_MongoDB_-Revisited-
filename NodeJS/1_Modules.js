// To run this file, open a terminal in the code editor and run --> node .\1_Modules.js
// Visit the documentation of NodeJS for Guides and syntax documentation

console.log(`(1)" Modules are considered as same as javascript libraries "`);

console.log(`(2)" Node.js has a set of built-in modules which you can use without any further installation. "`);

// To include a module, use the require() function with the name of the module.
console.log(`(3)" To include a module, use the require() function with the name of the module.
Example : var http = require('http')`)

console.log(`(4) "Node.js has a set of built-in modules :-
assert -->	Provides a set of assertion tests
buffer -->	To handle binary data
child_process -->	To run a child process
cluster -->	To split a single Node process into multiple processes
crypto -->	To handle OpenSSL cryptographic functions
dgram -->	Provides implementation of UDP datagram sockets
dns -->	To do DNS lookups and name resolution functions
domain -->	Deprecated. To handle unhandled errors
events -->	To handle events
fs -->	To handle the file system
http -->	To make Node.js act as an HTTP server
https -->	To make Node.js act as an HTTPS server.
net -->	To create servers and clients
os -->	Provides information about the operation system
path -->	To handle file paths
punycode -->	Deprecated. A character encoding scheme
querystring -->	To handle URL query strings
readline -->	To handle readable streams one line at the time
stream -->	To handle streaming data
string_decoder -->	To decode buffer objects into strings
timers -->	To execute a function after a given number of milliseconds
tls -->	To implement TLS and SSL protocols
tty -->	Provides classes used by a text terminal
url -->	To parse URL strings
util -->	To access utility functions
v8 -->	To access information about V8 (the JavaScript engine)
vm -->	To compile JavaScript code in a virtual machine
zlib -->	To compress or decompress files`)

console.log(`We can also create our own modules and include them in our application`)