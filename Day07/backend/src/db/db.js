const  dns =require("dns");

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
]);

const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('connect to DB');
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDB:',err);
    });
}

module.exports = connectDB;