var express = require("express");
var router = express.Router();

const searchRouter = require("./search/index");

router.use("/search", searchRouter);

module.exports = router;
