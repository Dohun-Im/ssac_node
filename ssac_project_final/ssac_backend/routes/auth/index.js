var express = require("express");
var router = express.Router();

const AuthController = require("../../controllers/AuthController");
//const authModule = require("../../modules/authModule");

router.post("/signup", AuthController.signup);

router.post("/signin", AuthController.signin);

module.exports = router;
