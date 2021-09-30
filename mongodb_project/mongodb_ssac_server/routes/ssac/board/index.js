const express = require("express");
const router = express.Router();

const BoardController = require("../../../controllers/ssac/BoardController");
const authModule = require("../../../modules/authModule");

//인증 필요
router.post("/", authModule.loggedIn, BoardController.createBoard);
router.put("/:id", authModule.loggedIn, BoardController.updateBoard);
router.delete("/:id", authModule.loggedIn, BoardController.deleteBoard);

//인증 불필요
router.get("/", BoardController.readAllBoard);
router.get("/:id", BoardController.readIdBoard);

module.exports = router;
