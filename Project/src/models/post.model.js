const mongoose = require('mongoose');


const postSchemas = new mongoose.Schema({
    image:String,
    caption:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const postModel = mongoose.model("post", postSchemas)

module.exports=postModel;