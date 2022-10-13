const http = require('http');

const express = require('express');

const app = express ();

app.use((req, res, next)=>{
    console.log('in the middleware!');
    next();
});
app.use((req, res, next)=>{
    console.log('in another middleware!');
    res.send('<h1>Hello from express</h1>');//in the second file we just use the responce send functions init. we have multiple method to get a respnce from it but express js provide a function of send init. With the help of send function in it we can send a responce to the file. What we write in this file we can see it in local server if we run this file. If we open our console network option we can say that the file is methioned that it have data or html in it. This thing also provided by the express. If we want to move to the next portion we use the command next in it but for the responce we use send function. with send function we dont implement the both next and send function. They both have their on simplicity and having their on function in it.

});

const server = http.createServer(app);

server.listen(3000);