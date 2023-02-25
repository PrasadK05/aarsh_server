const express = require("express");
const Enquiries = require("../models/enquiries.model");

const app = express.Router();

app.post("/", async (req, res) => {
  let { name, email, subject, message } = req.body;
  try {
    let en = await Enquiries.create({ name, email, subject, message });
    return res.status(200).send({ status: true, message: "successfull" });
  } catch (error) {
    return res.status(404).send({ status: false, message: error });
  }
});

app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let en = await Enquiries.findByIdAndDelete({ _id: id });
    return res.status(200).send({ status: true, message: "successfull" });
  } catch (error) {
    return res.status(404).send({ status: false, message: "unsuccessfull" });
  }
});

app.get("/", async (req, res) => {
  try {
    let en = await Enquiries.find();
    return res.status(200).send({ status: true, data: en });
  } catch (error) {
    return res.status(404).send({ status: false, message: "unsuccessfull" });
  }
});

module.exports = app;
