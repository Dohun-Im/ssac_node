const express = require("express");
const router = express.Router();
const profileController = require("../../../controllers/profileController");
const upload = require("../../modules/awsUpload");

router.post("/images", upload.single("img"), pofileController.uploadImage);

router.get("/", profileController.readAllProfile);

router.post("/", profileController.uploadProfile);

module.exports = router;
