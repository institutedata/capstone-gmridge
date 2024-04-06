const Mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DB_URI || "mongodb://localhost:27017/miniProjectDatabase";

const connectDb = async () => {
  const conn = await Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDb;
// });