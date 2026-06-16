const mongoose = require('mongoose');


//server Database se kese connect hoga ye tim db.js file mein likhoge 

function connectToDB(){

    mongoose.connect("mongodb+srv://admin:uiSe6bPDMKeyXhqU@day05lacture.yagocx1.mongodb.net/cohort")
    .then(()=>{
        console.log("connect to db")
    })

}

module.exports = connectToDB;