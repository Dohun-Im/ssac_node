const express = require("express");
const router = express.Router();

const categoryArr = [];

// 기기 카테고리 설정
router.post("/", (req, res) => {
  const { categoryName, categoryDescription } = req.body;

  const categoryIdx = categoryArr.findIndex((item) => {
    return item.categoryName === categoryName;
  });

  if (categoryIdx === -1) {
    categoryArr.push({ categoryName, categoryDescription });
    res.status(200).json({
      message: "카테고리 생성 완료",
      data: categoryArr[categoryArr.length - 1],
    });
  } else {
    res.status(400).jseon({
      message: "중복된 카테고리 존재",
    });
  }
});

//기기 카테고리 조회
router.get("/", (req, res) => {
  if (categoryArr.length === 0) {
    res.status(401).json({
      message: "카테고리가 존재하지 않습니다",
    });
  } else {
    res.status(200).json({
      message: "카테고리 조회 완료",
      data: categoryArr,
    });
  }
});

module.exports = router;
