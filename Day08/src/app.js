const express = require ('express');
const indexRouter = require ('./routes/index.routes');
const aboutRouter = require ('./routes/about.routes');

const app = express();


app.use((req,res,next)=>{
    console.log("This middleware is between app and routes")
   next()
})

app.use('/',indexRouter);

app.use('/',aboutRouter);


module.exports=app;