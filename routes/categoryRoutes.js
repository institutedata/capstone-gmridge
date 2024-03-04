let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

router.get('/', (req, res) => {
   Controllers.categoryController.getcategory(res);
})

router.post('/create', (req, res) => {
   Controllers.categoryController.createcategory(req.body, res);
})
module.exports = router;

router.put('/:id', (req, res) => {
    Controllers.categoryController.updatecategory(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.categoryController.deletecategory(req, res)
})