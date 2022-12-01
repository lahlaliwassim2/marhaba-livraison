const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_URL);

const connectDB = mongoose.connection;

connectDB
  .on("open", () => console.log("mongoose is connected"))
  .on("close", () => console.log("mongoose is disconnected"))
  .on("error", (error) => console.log(error));
module.exports = connectDB;
