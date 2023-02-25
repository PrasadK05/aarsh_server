const mongoose = require("mongoose");

let enq = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

let Enquiries = mongoose.model("Enquiries", enq);

module.exports = Enquiries;
