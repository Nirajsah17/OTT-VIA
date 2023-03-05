const config = require("./config");
const mongoose = require('mongoose');
const url = "mongodb+srv://VIA_user:NfrIXcOFBHMMfj9v@cluster0.gyrdcnw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB Connected…");
}).catch(err => console.log(err))