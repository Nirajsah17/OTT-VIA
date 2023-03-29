const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { exec } = require('child_process');
const upload = multer({ dest: '../../' });
const app = express();
app.use(express.json());



app.get("/whoami", (req, res) => {
    res.send("video segmenter apis");
})


app.get("/upload", upload.single('video'), (req, res, next) => {

    const filename=req.file;
    console.log(filename)
    const outputFilePath = '/home/robin/streamClone/path/to/';
    const executefile = '/home/robin/OTT-VIA/video-segment/src/shellscript.sh ' + req.file.path + ' ' + outputFilePath;
    // exec(executefile, { shell: true }, (err, stdout, stderr) => {
    //     if (err) {
    //         console.error(err);
    //         res.send(err);
    //     }
    //     console.log(stdout);
    // });

    res.send("User upload video successfully")
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})