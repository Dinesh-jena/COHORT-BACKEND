// ager koi pacakge ko use  karna ho to usko pehele install karna padta hai 
// per koi module ko use karna ho to usko require karna padta hai,orr lagta hai ki ye kese install ho gaye jab tumne jab 
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('Hello World');
// });

// server.listen(3000, () => {
//     console.log('Bhai sever chal raha hai port 3000 jaa check kar jaldi');
// } );


// http = module hai 
// express = package hai isi liye isko install karna padega 


const express = require('express');

const app = express(); //server create hua hai iss line pe 

app.get('/home', (req,res) => {
    res.send('Hello to home page');
 });

app.get('/about', (req,res) => {
    res.send('Hello to about page');
 });

app.listen(3000, () => {
    console.log('Bhai sever chal raha hai port 3000 jaa check kar jaldi');
} );
