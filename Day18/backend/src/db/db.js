const mongoose = require('mongoose');


const connectToDB = () =>{
    try{
        mongoose
        .connect(process.env.MONGODB_URL)
        .then(()=>{
            console.log("Connrct to Db.");
        });
    }catch(err){
        console.log('Error connecting to the database' , err);
        process.exit(1);
    }
}


module.exports = connectToDB;