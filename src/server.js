require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const connect = require("./config/db");
const userRoute = require("./routes/admin.route");
const appliedRouter= require("./routes/applied.route")
const enquiryRoutes=require("./routes/enquiries.route")
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/user", userRoute);
app.use("/apply", appliedRouter)
app.use("/enquiry", enquiryRoutes);


app.listen(PORT, async () => {
  await connect();
  console.log(`running at ${PORT}`);
});
