const express = require('express');
const mongoose = require('mongoose');
const ffmpeg = require('fluent-ffmpeg');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'D:/streamClone/path/tmp/' });
const app = express();
app.use(express.json());
const { spawn } = require('child_process');
const { log } = require('console');
const { exec } = require('child_process');
const { dirname } = require('path');





app.get("/whoami", (req, res) => {
    res.send("video segmenter apis");
})




app.get("/upload", upload.single('video'), (req, res, next) => {
    // const outputFilePath = 'D:/streamClone/path/to/output_video.mp4';
    const outputFilePath = 'D:/streamClone/path/to/';
    const filePath = req.file.path;
    const executefile = 'D:\\streamClone\\OTT-VIA\\video-segment\\src\\shellscript.bat ' + req.file.path + ' ' + outputFilePath;
    exec(executefile, { shell: true }, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            res.send(err);
        }
        console.log(stdout);
    });

    res.send("User upload video successfully")
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})