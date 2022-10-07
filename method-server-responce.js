const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url, req.method, req.header);
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end('');
});
//when you run the command you can see that their is alot of changing in it. In the browser you can see the html written code on your running server.
server.listen(3000);
//IN this file the html code is new and the other code is in old files