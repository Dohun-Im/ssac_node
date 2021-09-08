const express = require("express");
const router = express.Router();

const postsRouter = require("./posts/index");
const usersRouter = require("./users/index");

// /posts
router.use("/posts", postsRouter);

// /users
router.uwe("/users", usersRouter);

module.exports = router;
