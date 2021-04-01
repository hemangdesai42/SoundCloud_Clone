const express = require("express")
const asyncHandler = require("express-async-handler");
const { Comment } = require("../../db/models")

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    res.json(comments)
}));

router.post('/', asyncHandler(async (req, res) => {
    const { photoId, userId, userComment } = req.body;
    const comment = await Comment.create({
        photoId,
        userId,
        userComment
    });
    res.json(comment)
}))

module.exports = router;