const express = require("express");
const Applied = require("../models/applied.model");

const app = express.Router();

app.post("/", async (req, res) => {
  let { name, email, contact, course } = req.body;
  try {
    let ap = await Applied.create({ name, email, contact, course });
    return res.status(200).send({ status: true, message: "successfull" });
  } catch (error) {
    return res.status(404).send({ status: false, message: error });
  }
});

app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let ap = await Applied.findByIdAndDelete({ _id: id });
    return res.status(200).send({ status: true, message: "successfull" });
  } catch (error) {
    return res.status(404).send({ status: false, message: "unsuccessfull" });
  }
});

app.get("/", async (req, res) => {
  try {
    let ap = await Applied.find();
    return res.status(200).send({ status: true, data:ap });
  } catch (error) {
    return res.status(404).send({ status: false, message: "unsuccessfull" });
  }
});

module.exports = app;
