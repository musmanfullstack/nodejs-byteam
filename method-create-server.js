//in node.js we use require function to import files.require either takes a path to another files.If you dont have your file you can also import a core module like http.The file you have path will always give with ./ or / and it can automatically add .js at the end. if we write http in require function we are accessing the global files.
const http = require('http');
// req and res is typically sortcut key. req is request and res is Responce. 
const server = http.createServer((req,res) =>{
//in it with arrows we declare the function
    
});
//creating a server is sound like a super complex but to create a server is a few line of code.
//if you run thisa file it keep reloading because the request cannot find any page.
server.listen(3000);