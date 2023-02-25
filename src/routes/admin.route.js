require("dotenv").config();
const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_KEY;
const refreshToken_secret = process.env.REFRESHTOKEN_KEY;

const app = express.Router();

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await User.findOne({ email, password });
  if (user) {
    let token = jwt.sign({ email: user.email }, token_secret, {
      expiresIn: "24 hr",
    });
    let refreshToken = jwt.sign({ email: user.email }, refreshToken_secret, {
      expiresIn: "7 days",
    });

    return res.status(200)
      .cookie("token", token)
      .cookie("refreshToken", refreshToken)
      .send({ status: true, token, refreshToken });
  } else {
    return res.send({ status: false, messege: "wrong details" });
  }
});

module.exports = app;
