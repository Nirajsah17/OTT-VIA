const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/userRoute");
const SECRET_KEY = "nodejsApp";
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exist" })
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await userModel.create({
        email: email,
        username: username,
        password: hashedPassword
      });
      console.log("res", result);
      const token = jwt.sign({ email: result.email, id: result._id, }, SECRET_KEY);
      res.status(201).json({ user: result, token: token })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
}

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({email:email});
    if (!existingUser) {
      return res.status(404).json({ message: "user not found" });
    }else{
      const matchPassword = await bcrypt.compare(password, existingUser.password);
      if(!matchPassword){
        return res.status(400).json({message: "Invalid password"});
      }
      const token = jwt.sign({ email: existingUser.email, id: existingUser._id, }, SECRET_KEY);
      res.status(201).json({ user: existingUser, token: token });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "something went wrong" });
  }
};

module.exports = { signin, signup };