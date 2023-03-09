const express = require("express");
const dbConnect = require("./db/dbConnect");
const noteRoute = require("./routes/noteRoute");
const userRoute = require("./routes/userRoute");
const app = express();

dbConnect().then(()=>{
  app.listen(3000,()=>{
    console.log("running at 3000");
  })
}).catch(e=>{
  console.log(e);
});

app.use(express.json());
// Middleware
app.use("/users",userRoute);
app.use("/notes",noteRoute);
app.get("/",(req,res)=>{
  res.send("Hello world");
})