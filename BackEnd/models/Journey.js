const { Schema, model } = require("mongoose");

const TAG = 'Journey';

const journeySchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: { 
        type: String, 
        trim: true, 
        required: true 
    },
    email: { 
        type: String, 
        trim: true, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String,
        minLength: 6, 
    },
  },
  {
    timestamps: true,
    collection: TAG
  }
);

const Journey = model(TAG, journeySchema);
module.exports = Journey
