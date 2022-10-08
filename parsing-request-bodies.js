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
    const body = [];
    req.on('data',(chunk) => {//make the chunks of input you eneters
        console.log(chunk);//show the chunks in consol 
        body.push(chunk); 
    });
    req.on ('end',() => {//block the code execution and work only on that fuction and end the code
        const parsedBody = Buffer.concat(body).toString();//buffer the chunks
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.js' , message);//make a file name as meesage and shows the message what we enter in the input feild.
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
}
});
server.listen(3000);