"use strict";
const { Comment } = require("../models"); // Assuming you have a Comment model in the models folder

const getComment = (res) => {
  // finds all comments
  Comment.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createComment = (data, res) => {
  // creates a new comment using JSON data POSTed in request body
  console.log(data);
  new Comment(data).save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComment = (req, res) => {
  // updates the comment matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    })
}

const deleteComment = (req, res) => {
  // deletes the comment matching the ID from the param
  Comment.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message })
    })
}


const commentController =  {
  getComment,
  createComment,
  updateComment,
  deleteComment
};
module.exports = commentController