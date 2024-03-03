"use strict";
let Models = require("../models"); // matches index.js

const getCategory = (res) => {
  Models.Category.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createCategory = (data, res) => {
  // creates a new likes using JSON data POSTed in request body
  console.log(data);
  new Models.Category(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateCategory = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true})
    .then((data) => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    })
}
const deleteCategory = (req, res) => {
  // deletes the user matching the ID from the param
  Models.Category.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message })
    })
}

module.exports = {
  getLikes: getCategory,
  createLikes: createCategory,
  updateLikes: updateCategory,
  deleteLikes: deleteCategory
};