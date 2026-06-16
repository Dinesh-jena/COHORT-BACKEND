const  dns =require("dns");

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
]);

const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect("mongodb+srv://admin:nhgmTEqZDz0i4Qlb@cluster0.yrsa3l7.mongodb.net/")
    .then(()=>{
        console.log("Nice,connect to db..")
    })
}


module.exports = connectToDB;