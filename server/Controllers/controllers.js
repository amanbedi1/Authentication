const Users = require("../Models/users.js");

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

const privateKey = process.env.PrivateKey;

const registerUser = (req, res) => {
  const userCredentials = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  const { repassword } = req.body;

  if (userCredentials.password !== repassword) {
    return res.status(401).json({ message: "Password doesn't match" });
  }

  const user = new Users(userCredentials);

  user.save((err, user_) => {
    if (err) {
      if (err.code == 11000) {
        return res.status(401).json({ message: "Credentials already exist" });
      }
      return res.status(404).json({ message: "Bad Request" });
    }

    const token = jwt.sign(
      { id: user_.id, username: user_.username },
      privateKey,
      { expiresIn: 120 }
    );

    return res
      .status(201)
      .json({ message: "Success", token: token, username: user_.username });
  });
};

const authenticateUser = (req, res) => { 
  const { username, password } = req.body;

  Users.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "Bad Request" });
    }

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      }

      if (!isMatch) {
        return res.status(401).json({
          message: "Authentication Failed : Password Username doesn't match ",
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        privateKey,
        { expiresIn: 60 }
      );

      return res
        .status(200)
        .json({ message: "Success", token: token, username: user.username });
    });
  });
};

const func = () => {
  console.log(privateKey);
};

module.exports = {
  registerUser: registerUser,
  authenticateUser: authenticateUser,
  func: func,
};
