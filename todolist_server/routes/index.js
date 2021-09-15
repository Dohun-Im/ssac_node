var express = require("express");
var router = express.Router();
const con = require("../modules/mysql");
const todosRouter = require("./todos/index");

router.get("/", (req, res) => {
  res.json({
    message: "접속완료!",
  });
});

router.use("/todos", todosRouter);

module.exports = router;
