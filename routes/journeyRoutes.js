const express = require("express");
const router = express.Router();
const { journeyController } = require("../controllers");

router.get('/', (req, res) => {
  journeyController.getjourneys(res);
});


router.post('/create', (req, res) => {
  journeyController.createjourney(req.body, res);
});


router.put('/:id', (req, res) => {
  journeyController.updatejourney(req, res);
});


router.delete('/:id', (req, res) => {
  journeyController.deletejourney(req, res);
});

module.exports = router;