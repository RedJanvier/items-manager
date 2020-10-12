const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const models = require('../database/models/index');
exports.loginn = async (req, res) => {
  const {email,password,} = req.params;//Take data from user
  const user = {
    id: 1,
    username: process.env.USERNAME,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  };
  if (req.body.email !== user.email) {
    return res.status(401).json({
      status: 401,
      message: "Wrong email",
    });
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) {
    return res.status(401).json({
      status: 401,
      message: "Wrong email or password",
    });
  }
  const token = await jwt.models.sign({ token }, {
    where: {//Take data from user compare to data from db
      user:user
    }
  }, process.env.SECRET);//check secret key
  res.status(200).json({
    token: token,//display token
  });
};
