var express = require("express");
var router = express.Router();

const PostController = require("../../controllers/PostController");
const authModule = require("../../modules/authModule");

router.post("/", authModule.loggedIn, PostController.createPost);
router.put("/:id", authModule.loggedIn, PostController.updatePost);
router.delete("/:id", authModule.loggedIn, PostController.deletePost);

router.get("/", PostController.readAllPost);
router.get("/:id", PostController.readDetailPost);

module.exports = router;
