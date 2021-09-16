var express = require("express");
var router = express.Router();

const devicesRouter = require("./devices/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/devices", devicesRouter);

module.exports = router;
