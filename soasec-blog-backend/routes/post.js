var express = require('express');
var router = express.Router();
var post=require("../controller/post_c")

// /posts
router.get('/',post.getPosts);
router.post('/',post.addPost);

module.exports = router;