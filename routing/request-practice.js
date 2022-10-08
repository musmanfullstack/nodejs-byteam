const http = require('http');
const routes = require('./routing.js');//if we want to add the file as a object it can manipulate and not work so we have to connect the file like this. we can put any constatnt and we can run it. but we have to add in it.
const server = http.createServer(routes);
server.listen(3000);
//This file is working the same like the others but having some little difference in it. in it we add a file externally by creating routes and we can use it.