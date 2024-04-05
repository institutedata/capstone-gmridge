"use strict";
const { Category } = require("../models");
const { asyncHandler } = require("../middleware");// Assuming you have a Category model in the models folder

const getCategory = asyncHandler( async(req, res) => {
  // finds all categories
  await Category.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
})

const createCategory = asyncHandler(async (data, res) => {
  // creates a new category using JSON data POSTed in request body
  console.log(data);
  await  Category(data).save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
})

const updateCategory = asyncHandler(async(req, res) => {
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
})

const deleteCategory = asyncHandler(async(req, res) => {
  // deletes the category matching the ID from the param
  Category.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    })
})

const categoryController = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
module.exports =  categoryController
