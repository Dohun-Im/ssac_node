const express = require("express");
const router = express.Router();
const membershipController = require("../../controllers/membership/membershipController");
const upload = require("../../modules/awsUpload");

router.get("/:gender", membershipController.detailMembership);

router.post("/images", upload.single("img"), membershipController.uploadImage);

router.post("/", membershipController.uploadMembership);

module.exports = router;
