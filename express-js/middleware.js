const http = require('http');

const express = require('express');

const app = express ();

app.use((req, res, next)=>{
    console.log('in the middleware!');
    next();//It alllows the request to coontinue to the next middleware in line
});
//use is a built in function which allow us to add a new middleware functions. Now the use is a pretty flexible it can accept of so called request handlers here and it has some other use case too. you pass a app to use will be executed every incoming request and this function will recive three arguments. req and responce object. the third argument is next argument. the req and res do the same but with extra featuers. next function is a function that will pass this all function by express js. It is little confusing that you are passing a function as a argument to a use method. this function youre passing is recieving yet another function here on the next argument and the next argument is basically this function youre reciving here has to be executed to allow the request travel on to the next middleware. 
//we can simply console.log in the middleware and we get no responce beacause we dont make any logic in it. this allows a hook to this funnel. 
//hence if we create two middlewares with the different output of the console it show the output of only first console but if we type next function in it then it will goes to the next function. if we dont use next function then it will keep run and die on the first function.
app.use((req, res, next)=>{
    console.log('in another middleware!');

});




const server = http.createServer(app);

server.listen(3000);