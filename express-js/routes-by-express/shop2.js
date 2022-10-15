const express = require('express');

const router = express.Router();//declaring routers

router.use('/add-student',(req, res, next)=>{
    console.log('in another middleware!');
    res.send('<h1>Added successfully</h1>');
});

module.exports = router;