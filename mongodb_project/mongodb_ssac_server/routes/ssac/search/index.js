var express = require("express");
const SearchController = require("../../../controllers/ssac/SearchController");
var router = express.Router();

router.get("/", SearchController.search);

module.exports = router;
