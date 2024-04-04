const express = require("express");
const goodlog = require("good-logs");
const connectDb = require("./dbConnect");
const { journeyController } = require("./controllers");
const { journeyRoute, commentRoute, categoryRoute } = require('./routes')
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your route handlers
app.use('/api/journeys', journeyRoute);
app.use('/api/comments', commentRoute);
app.use('/api/category', categoryRoute);

// set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  goodlog.custom('bgCyan',`Server is running on port ${PORT}.`);
  // console.log(`Server is running on port ${PORT}.`);
});





// const { MongoClient } = require('mongodb');

// // MongoDB
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// client.connect(async (err) => {
//   if (err) {
//     console.error('An error occurred connecting to MongoDB: ', err);
//     process.exit(1);
//   }
//   console.log('Connected to MongoDB');
// });