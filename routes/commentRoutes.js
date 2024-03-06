let express = require("express");
let router = express.Router();
let { commentController } = require("../controllers"); // index.js

router.get('/', (req, res) => {
   commentController.getComment(res);
})

router.post('/create', (req, res) => {
   commentController.createComment(req.body, res);
})

router.put('/:id', (req, res) => {
    commentController.updateComment(req, res)
})

router.delete('/:id', (req, res) => {
    commentController.deleteComment(req, res)
})


const  commentRoute = router
module.exports = commentRoute