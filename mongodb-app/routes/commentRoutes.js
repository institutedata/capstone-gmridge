let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

router.get('/', (req, res) => {
   Controllers.commentController.getComment(res);
})

router.post('/create', (req, res) => {
   Controllers.commentController.createComment(req.body, res);
})
module.exports = router;

router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res)
})