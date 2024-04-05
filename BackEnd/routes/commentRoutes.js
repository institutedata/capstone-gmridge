let express = require("express");
let router = express.Router();
let { commentController } = require("../controllers"); // index.js

/**
 * @path {baseUrl}/api/comments
 
 */

router.get('/',  commentController.getComment);
router.get('/:id', commentController.getComment);
router.post('/create', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

const commentRoute = router
module.exports = commentRoute