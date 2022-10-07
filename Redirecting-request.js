const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
const url = req.url;
const method = req.method;
if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button> </form></body>'); //By default the use method is Get in it 
    res.write('</html>');
    return res.end('');
}
if(url ==='/message' && method === 'POST'){
    fs.writeFileSync('message.js' , 'DUMMY');//creating a file in our code 1:- The First parameter contains the name of the file and the second parameter contains the data we want to store in the file we created.
    res.statusCode = 302;//redirected file code
    res.setHeader('Location', '/');
    return res.end();
}
});
server.listen(3000);