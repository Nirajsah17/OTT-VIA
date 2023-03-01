const express = require('express');
const mongoose = require('mongoose');
const ffmpeg = require('fluent-ffmpeg');
const multer = require('multer');
const fs=require('fs');


const upload = multer({ dest: 'tmp/' });

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("hello")
})

app.post('/upload', upload.single('video'), (req, res, next) => {
    console.log("hello");
    const video = req.file;
ffmpeg(req.file.path)
  .outputOptions('-s 1280x720') // set output resolution to 720p
  .save('path/to/output720p.mp4')
  .outputOptions('-s 854x480') // set output resolution to 480p
  .save('path/to/output480p.mp4')
  .outputOptions('-s 640x360') // set output resolution to 360p
  .save('path/to/output360p.mp4')
  .on('end', () => {
    // Delete the temporary file
    fs.unlinkSync(req.file.path);

    res.send('Video converted and saved successfully!');
  });
  
    
  });


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})