require("dotenv").config();
const mongoose = require("mongoose");
const { secret } = require("./secret");

mongoose.set("strictQuery", false);

const MONGO_URI = secret.db_url;

const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is required");
    }
    await mongoose.connect(MONGO_URI);
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
