var express = require("express");
const { findOne } = require("../models/users");
var router = express.Router();

const users = require("../models/users");

//Create
router.post("/auth", (req, res) => {
  const { name, age, gender, likes } = req.body;

  const userModel = new users({
    name,
    age,
    gender,
    likes,
  });

  userModel
    .save()
    .then((savedUser) => {
      console.log(savedUser);
      res.status(200).json({
        message: "생성 성공",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    });
});

//Read All
router.get("/auth", async (req, res) => {
  try {
    const result = await users.find(); //다수 찾기는 find(). 하나만 찾는것은 findone({}), and조건 추가는 findbyid()
    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "조회 실패",
      error: error,
    });
  }
});

//Read Detail
router.get("/auth/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await users.findOne({ _id: id });
    if (!result) return res.status(400).json({ message: "조회 할 값 없음" });
    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      messtae: "조회 실패",
      error: error,
    });
  }
});

//Update
router.put("/auth/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, likes } = req.body;

  try {
    const result = await users.findByIdAndUpdate(
      id,
      {
        name,
        age,
        gender,
        likes,
      },
      { new: true } //수정 한 후 값을 반환하는것. false로 하면 수정 전 값 반환
    );
    res.status(200).json({
      message: "수정 완료",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "수정 실패",
      error: error,
    });
  }
});

//Delete
router.delete("/auth/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await users.findByIdAndDelete(id);
    res.status(200).json({
      message: "삭제 성공",
    });
  } catch (error) {
    res.status(500).json({
      message: "삭제 실패",
      error: error,
    });
  }
});

module.exports = router;
