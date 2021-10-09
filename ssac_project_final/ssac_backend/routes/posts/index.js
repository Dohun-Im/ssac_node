var express = require("express");
var router = express.Router();

const PostController = require("../../controllers/PostController");
const authModule = require("../../modules/authModule");

router.post("/", authModule.loggedIn, PostController.createPost);
router.post("/:id", authModule.loggedIn, PostController.updatePost);
router.post("/:id", authModule.loggedIn, PostController.deletePost);

module.exports = router;
