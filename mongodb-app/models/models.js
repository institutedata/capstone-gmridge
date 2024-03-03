const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const journeySchema = new Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  emailId: { type: String, trim: true, required: true, unique:
true },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const ObjectId = Schema.ObjectId;

const Comment = new Schema({
  name: { type: String, default: 'hahaha' },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});

const Category = new Schema({
  Category: { type: Number, default: 0 },
});

// checked, completion receipt for exercise 1

module.exports = mongoose.model("journey", journeySchema);
module.exports = mongoose.model("Comment", Comment);
module.exports = mongoose.model("Category", Category);
// The "journey" mentioned in the above line should be in
// lowercase singular form ..whereas the actual collection
// name in mongodb will be in the plural form.
// Refer to mongoose documentation for more: https://www.npmjs.com/package/mongoose
// The first argument is the singular name of your collection.
// Mongoose automatically looks for the lowercase plural version. For example, if you use
// const MyModel = mongoose.model('Ticket', mySchema);
// Then MyModel will use the tickets collection, not the Ticket collection.
