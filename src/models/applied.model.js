const mongoose = require("mongoose");

let app = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  course: { type: String, required: true },
});

let Applied = mongoose.model("Applied", app);

module.exports = Applied;
