const Mongoose = require("mongoose");
require("dotenv").config();

// if the connection fails, try 127.0.0.1 instead of localhost below
const uri = process.env.DB_URI || "mongodb://localhost:27017/miniProjectDatabase";

const connectDb = async () => {
  const conn = await Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log("MongoDB Connected")
};


connectDb();

// // Connect to MongoDB
// const dbConnect = Mongoose.connect(uri)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((error) => console.log("MongoDB Error:" + error.message));

// // Get the default connection
// const db = Mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));



module.exports = connectDb