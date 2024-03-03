"use strict";
let Models = require("../models"); // matches index.js

const getJourney = (res) => {
  // finds all journey
  Models.Journey.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createJourney = (data, res) => {
  // creates a new journey using JSON data POSTed in request body
  console.log(data);
  new Models.Journey(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateJourney = (req, res) => {
  // updates the journey matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Journey.findByIdAndUpdate(req.params.id, req.body, {
    new: true})
    .then((data) => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    })
}
const deleteJourney = (req, res) => {
  // deletes the journey matching the ID from the param
  Models.Journey.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message })
    })
}

module.exports = {
  getJourney: getJourney,
  createJourney: createJourney,
  updateJourney: updateJourney,
  deleteJourney: deleteJourney
};
