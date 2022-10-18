const path = require('path');
const express = require('express');

const router = express.Router();//declaring routers

router.get('/add-student',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../' ,'views', 'shop.html'));//the dirname is a global variable which holds absolue path in the variable. In it path join didect your operating system and make the path. when it goes in dir name it takes the location of this file then ../ takes it one step up means out of the folder and then in views folder and shop file
});

module.exports = router;