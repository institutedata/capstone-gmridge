"use strict";
const goodlog = require('good-logs');
const { Journey } = require("../models");
const { asyncHandler } = require('../middleware') // Assuming you have a Journey model in the models folder
const { HTML } = require('../constants') // Assuming you have an HTML constant in the constants folder


const getHTMLMap = asyncHandler(async(req, res) => {
  // finds all journeys

  try {
    // const journeys = await Journey.find({})
  
    res.status(200).send(HTML.MAPS)
  } catch (error) {
    res.status(500).json({ success: false, result: 500, error: error.message });
  }
    // .then((data) => res.status(200).json({ resudsalt: 200, data: data }))
    // .catch((err) => {
    //   console.log(err);
    //   res.send({ result: 500, error: err.message });
    // });
})

const getJourneys = asyncHandler(async(req, res) => {
  // finds all journeys
  await Journey.find({})
    .then((data) => res.status(200).json({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
})


const getJourney = asyncHandler(async(req, res) => {
  // finds all journeys
 
   try {
    const journey =await Journey.findById(req.params.id)
    if(!journey){
      return res.status(404).json({ success: false, result: 404, error: 'Journey not found' })
    }

    res.status(200).json({ success: true, result: 200, data: journey })
   } catch (error) {
    goodlog.error(error.message);
    res.status(500).json({ success: false, result: 500, error: error.message });
   }
})

const createJourney = asyncHandler(async(req, res) => {

  // creates a new journey using JSON data POSTed in request body
    try {
      const journey = await Journey.create(req.body)
      res.status(201).json({ success: true, result: 201, data: journey })
    } catch (error) {
      goodlog.error(error.message);
      res.status(500).json({ success: false, result: 500, error: error.message });
    }


    // .then((res) => res.status(201).json(
    //   { success: true, result: 201, data: req.body }))
    // .catch((err) => {
    //   goodlog.error(err.message);
    //   res.status(500).json(
    //     { success: false, result: 500, error: err.message });
    // });
})

const updateJourney = asyncHandler(async(req, res) => {

  try {
    const journeyExists = await Journey.findById(req.params.id)

    if(!journeyExists){
      return res.status(404).json({ success: false, result: 404, error: 'Journey not found' })
    }

    const journey = await Journey.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({ success: true, result: 200, data: journey })

  } catch (error) {
    goodlog.error(error.message);
    res.status(500).json({ success: false, result: 500, error: error.message });
  }



  // updates the journey matching the ID from the param using JSON data POSTed in request body
  // console.log(req.body);
  // Journey.findOneAndUpdate({ _id: req.params.id }, req.body, {
  //   new: true
  // })
  //   .then((data) => res.send({ result: 200, data: data }))
  //   .catch(err => {
  //     console.log(err);
  //     res.send({ result: 500, error: err.message });
  //   })
})

const deleteJourney = asyncHandler(async(req, res) => {

  try { 
    const journeyExists = await Journey.findById(req.params.id)

    if(!journeyExists){
      return res.status(404).json({ success: false, result: 404, error: 'Journey not found' })
    }

    await Journey.findByIdAndDelete(req.params.id)
    res.status(200).json({ success: true, result: 200, data: {} })

  } catch (error) {
    goodlog.error(error.message);
    res.status(500).json({ success: false, result: 500, error: error.message });
  }

  // deletes the journey matching the ID from the param
  // Journey.findOneAndDelete({ _id: req.params.id })
  //   .then(data => res.send({ result: 200, data: data }))
  //   .catch(err => {
  //     console.log(err);
  //     res.send({ result: 500, error: err.message })
  //   })
})


const journeyController = {
  getHTMLMap,
  getJourneys,
  getJourney,
  createJourney,
  updateJourney,
  deleteJourney
};
module.exports = journeyController