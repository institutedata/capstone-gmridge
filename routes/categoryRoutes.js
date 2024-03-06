let express = require("express");
let router = express.Router();
let { categoryController} = require("../controllers"); // index.js

router.get('/', (req, res) => {
   categoryController.getcategory(res);
})

router.post('/create', (req, res) => {
   categoryController.createcategory(req.body, res);
})
module.exports = router;

router.put('/:id', (req, res) => {
    categoryController.updatecategory(req, res)
})

router.delete('/:id', (req, res) => {
    categoryController.deletecategory(req, res)
})


const categoryRoute = router
module.exports = categoryRoute