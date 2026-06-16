const express = require('express');

const app = express();

app.use(express.json()); 

let notes = [];

app.get('/', (req, res) => { 
    res.send('Hello, World!');
});

/* /NOTES /post method => {title , content} */

app.post('/notes',(req,res)=>{
    console.log(req.body);                                                  
    notes.push(req.body);                       //ye jo api hai ye notes create kar rahi hai orr pushkar rahi hai  
    res.json({
         message: 'Note received successfully'
         });
});

app.get('/notes',(req,res)=>{
    res.json(notes);                        //note get karne se sare notes mil jaytenge 
});

//delete method 

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index; 
    
    delete notes[index]; //ye delete kar dega uss index pe jo note hai

    res.json({
        message: 'Note deleted successfully'
    });
});

//bhai jo note update karna hoga usko tumhe ispe index thruu kana padega 
app.patch('/notes/:index',(req,res)=>{
     const index = req.params.index; 
     
     const {title} = req.body;

     notes[index].title = title; //ye update kar dega uss index pe jo note hai

     res.json({
        message: 'Note updated successfully',
        index: index,
     });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');  
});