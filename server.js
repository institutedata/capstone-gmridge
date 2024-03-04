const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient } = require('mongodb');

// MongoDB
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

client.connect(async (err) => {
  if (err) {
    console.error('An error occurred connecting to MongoDB: ', err);
    process.exit(1);
  }

  console.log('Connected to MongoDB');

  app.use(express.json());

  // routes
  const { journeyController } = require("./controllers");
  let journeyRoutes = require('./routes/journeyRoutes')(client.db(), journeyController);

  // Use your route handlers
  app.use('/api/journeys', journeyRoutes);
  app.use('/api/comments', commentRoutes);
  app.use('/api/category', categoryRoutes);

  // set port
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});