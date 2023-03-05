// require database connection 
const dbConnect = require("./db/dbConnect");
const app = require("express")();
const bcrypt = require("bcrypt");
const User = require("./db/userModel");
const PORT = 3000;
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// execute database connection 
dbConnect();
app.listen(PORT,()=>{
  console.log(`Example app listening on port ${PORT}`);
})

app.post("/user/v1/register", (request, response) => {
  console.log("re",request.body);
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });
      // save the new user
      user.save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});