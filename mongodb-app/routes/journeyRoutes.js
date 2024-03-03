let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

//journey
// Adds a GET route to return all journeys
router.get('/', (req, res) => {
   Controllers.journeyController.getjourneys(res);
})

// Adds a POST route to create a new journey
router.post('/create', (req, res) => {
   Controllers.journeyController.createjourney(req.body, res);
})
module.exports = router;

router.put('/:id', (req, res) => {
    Controllers.journeyController.updatejourney(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.journeyController.deletejourney(req, res)
})
