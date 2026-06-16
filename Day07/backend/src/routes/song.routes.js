const express = require('express');
const multer = require('multer');
const uploadFile = require("../service/storage.service");
const router = express.Router();
const Songmodel = require("../models/song.model")


const upload = multer({storage:multer.memoryStorage()});

/*

title 
artist
audiofile

*/
//jab jab form data use karo tab multer use karo (if you have to use form data in postman then you have to use to multer )
router.post('/songs',upload.single("song"),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const filedata = await  uploadFile(req.file);

    const song = await Songmodel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:filedata.url,
        mood:req.body.mood
    })

    console.log(filedata);
    res.status(201).json({
        message:'song created successfully',
        song: song
    });

})


// router.get('/songs',async(req,res)=>{
//     const {mood} = req.body;
//     console.log("Mood received:", mood);  /* mood = sad */

//     const songs = await Songmodel.find({
//          mood: mood
//     })

//     console.log(songs)

//     res.status(200).json({
//         message:"songs fetched sucessfully",
//         songs
//     })
// })
router.get('/songs', async (req, res) => {
    try {
        const { mood } = req.query;

        console.log("👉 Received mood:", mood);

        if (!mood) {
            return res.status(400).json({
                message: "Mood query is required"
            });
        }

        const songs = await Songmodel.find({
            mood: mood
        });

        res.json(songs);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;