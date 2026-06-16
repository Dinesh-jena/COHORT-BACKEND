const express = require('express');

const app=express(); 

app.use(express.json()); // ye line isliye lagayi hai taki hum req.body se data access kar sake 


let notes = [];

app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);

    res.json({
        message:"Note added successfully",
        changes:"terekop dhire dhire sab aa raha hai re bidu",
        notes:notes
    });

});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});