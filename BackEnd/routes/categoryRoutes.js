let express = require("express");
let router = express.Router();
let { categoryController} = require("../controllers"); // index.js

/**
 * @path {baseUrl}/api/comments
 
 */

router.get('/',  categoryController.getCategory);
router.get('/:id', categoryController.getCategory);
router.post('/create', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

const categoryRoute = router
module.exports = categoryRoute