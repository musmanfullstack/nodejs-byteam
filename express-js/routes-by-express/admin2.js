const express = require('express');

const router = express.Router();//declaring router

router.get('/add-product', (req, res, next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input  type="text" name="title"> <button type="submit">Add product </button></form>'
    );
});
//in this admin file we are using the same url but they are not clashing with eachother because they are having different url hiting on different request js is that wise they know which request taking action and which url have to hit.
router.post('/add-product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/add-student');
});




module.exports = router;