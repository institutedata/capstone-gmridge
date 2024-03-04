"use strict";
const { Category } = require("../models"); // Assuming you have a Category model in the models folder

const getCategory = (res) => {
  // finds all categories
  Category.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createCategory = (data, res) => {
  // creates a new category using JSON data POSTed in request body
  console.log(data);
  new Category(data).save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateCategory = (req, res) => {
  // updates the category matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    })
}

const deleteCategory = (req, res) => {
  // deletes the category matching the ID from the param
  Category.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))