const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

/*
Post/register
Post/login
Get/user[protected]
*/

router.post('/register',async(req,res)=>{
    const {username,password} = req.body;
   
    const existingUser = await userModel.findOne({
        username
    })

    if(existingUser){
        return res.status(409).json({
            message:"UserName is alredy exiting"
        })
    }

    const user = await userModel.create({
        username,password
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)
    
    res.status(201).json({
        message:"user created sucessfully",
        user
    })
})
module.exports = router;