"use strict";
const { Journey } = require("../models"); // Assuming you have a Journey model in the models folder

const getJourneys = (res) => {
  // finds all journeys
  Journey.find({}).then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createJourney = (data, res) => {
  // creates a new journey using JSON data POSTed in request body
  console.log(data);
  new Journey(data).save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateJourney = (req, res) => {
  // updates the journey matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Journey.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    })
}

const deleteJourney = (req, res) => {
  // deletes the journey matching the ID from the param
  Journey.findOneAndDelete({ _id: req.params.id })
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message })
    })
}

module.exports = {
  getJourneys,
  createJourney,
  updateJourney,
  deleteJourney
};