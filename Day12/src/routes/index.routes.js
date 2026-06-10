const express = require('express');

const router = express.Router();

router.use((req,res,next)=>{
    console.log("This middleware is between middleware and api");
    next();
})

router.get('/',(req,res)=>{
    res.json({
        message:"Welcome to the cohort"
    })
})


module.exports = router;