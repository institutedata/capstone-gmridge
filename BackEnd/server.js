const express = require("express");
const goodlog = require("good-logs");
const connectDb = require("./dbConnect");
const { journeyController } = require("./controllers");
const { journeyRoute, commentRoute, categoryRoute } = require('./routes');
const multer = require('multer');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDb();

// Define multer storage for file upload
// Your multer configuration goes here...

// Your file upload route handler goes here...

// Use your route handlers
app.use('/api/journeys', journeyRoute);
app.use('/api/comments', commentRoute);
app.use('/api/category', categoryRoute);

// set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  goodlog.custom('bgCyan',`Server is running on port ${PORT}.`);
});
