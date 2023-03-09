const jwt = require("jsonwebtoken");
const SECRET_KEY = "nodejsApp";

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ message: "unauthorized user" })
    } else {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY)
      req.userId = user.id;
    }
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = auth;