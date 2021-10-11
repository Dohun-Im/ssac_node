var express = require("express");
var router = express.Router();

const AuthController = require("../../controllers/AuthController");
const authModule = require("../../modules/authModule");
const upload = require("../../modules/awsUpload");

router.post("/signup", AuthController.signup);

router.post("/signin", AuthController.signin);

// router.get("/profile", authModule.loggedIn, AuthController.getAllProfile);
router.get("/profile", authModule.loggedIn, AuthController.getDetailPorfile);

router.put(
  "/profile",
  authModule.loggedIn,
  upload.single("img"),
  AuthController.updateProfile
);

router.delete("/profile", authModule.loggedIn, AuthController.deleteProfile);

module.exports = router;
