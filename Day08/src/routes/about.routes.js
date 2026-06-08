const express = require('express');

const router = express.Router();

router.use((req,res,next)=>{
    console.log("about ka middle ware");
    next()
})

router.get('/about',(req,res)=>{
    res.json({
        message: "Welcome to the about page"
    })
})

module.exports = router;