

const express = require('express');

const app = express ();

app.use((req, res, next)=>{
    console.log('in the middleware!');
    next();
});
app.use((req, res, next)=>{
    console.log('in another middleware!');
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000);//same working we are doing just using singal function listen.