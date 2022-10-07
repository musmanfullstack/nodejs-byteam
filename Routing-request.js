const http = require('http');
const server = http.createServer((req,res) =>{
const url = req.url;
if (url === '/'){//this thriple equal sign is known as this is only true and equals to if this have that value in it.
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button> </form></body>'); //By default the use method is Get in it 
    res.write('</html>');
    return res.end('');//we return the code from the server and dont give the peorities to the lower function. so that why we use return
}//under this line the code is from old files
    console.log(req.url, req.method, req.header);
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end('');
});
server.listen(3000);