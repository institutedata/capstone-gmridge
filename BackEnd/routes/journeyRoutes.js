const express = require("express");
const router = express.Router();
const { journeyController } = require("../controllers");
const upload = require('../middleware/multerConfig');

router.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded');
    }
    return res.status(200).send('File uploaded successfully');
  });

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