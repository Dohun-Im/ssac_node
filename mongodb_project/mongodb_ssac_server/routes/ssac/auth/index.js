const express = require("express");
const router = express.Router();

const AuthController = require("../../../controllers/ssac/AuthController");
const authModule = require("../../../modules/authModule");

router.post("/signup", AuthController.signup);

router.post("/signin", AuthController.signin);

router.get("/profile", authModule.loggedIn, AuthController.getProfile);

module.exports = router;
