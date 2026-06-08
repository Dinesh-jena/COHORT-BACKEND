const express = require('express');

const app = express(); // iss line pe hum server create kar te hai 

//home => welcome to home page 

app.get('/home', (req, res) => { 
    res.send("changes ho raha hai kya !");
});

app.get('/about', (req, res) => { 
    res.send("Welcome to the about page!");
});

app.get('/contact', (req, res) => { 
    res.send("Welcome to the contact page!");
});

app.listen(3000, () => { 
    console.log("server is running on port 3000");
});
    
    



