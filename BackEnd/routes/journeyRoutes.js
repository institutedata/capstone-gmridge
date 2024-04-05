const express = require("express");
const router = express.Router();
const { journeyController } = require("../controllers");

/**
 * @path {baseUrl}/api/journeys
 
 */
router.get('/map', journeyController.getHTMLMap);
router.get('/',  journeyController.getJourneys);
router.get('/:id', journeyController.getJourney);
router.post('/create', journeyController.createJourney);
router.put('/:id', journeyController.updateJourney);
router.delete('/:id', journeyController.deleteJourney);

const journeyRoute = router
module.exports = journeyRoute