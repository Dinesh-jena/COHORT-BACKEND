const express = require('express');
const morgan = require('morgan');
const path = require("path");
const app = express();

app.use(morgan("dev"));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "../views"));

app.post('/api/auth/register',(req,res)=>{
    res.status(200).json({message:"Dummy endpoint create sucessfully"});
})

//it is usr for combine delimeter
// app.get("/",(req,res)=>{
//     res.render("index",{
//         message: [
//         "Hello from EJS",
//         "Welcome to the Express view engine",
//         "This is a sample message",
//         "EJS makes templating easy",
//         "Enjoy coding with EJS"
//     ]});
// })

app.get("/",(req,res)=>{
    res.render("index",{
        htmls: [
        `<h1>Hello World</h1>`,
        `<h2>This is a sample HTML snippet</h2>`,
        `<p>This is a paragraph.</p>`,
        `<button>Click Me</button>`
    ]});
})
module.exports = app;