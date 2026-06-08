const express = require("express");
const userModel = require("../models/user.model")



const router = express.Router();    

/*

POST /register
POST /login
GET /user
GET /logout

*/

router.post('/register',async(req,res)=>{

    const {username,password} = req.body 

    const user = await userModel.create({
        username,password
    })

    res.status(201).json({
        message:"user registered successsfully",
        user
    })
})

router.post('/login',async(req,res)=>{
    const {username,password} = req.body

    const isUserExists = await userModel.findOne({
        username:username
    })

    if(!isUserExists){
        return res.status(401)
    }
})



module.exports = router