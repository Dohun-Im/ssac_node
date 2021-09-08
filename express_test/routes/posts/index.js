const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "조회 성공~!!",
  });
});

// /qqq/?name=lee&ange=29&like=kimchi

router.get("/qqqq", (req, res) => {
  const { name, age, like } = req.query; // {name: 'lee','age: '29', like: 'kimchi'} 형태로 가져옴
  console.log(`like : ${like}, age: ${age}, name: ${name}`);
});

// params
router.get("/:id", (req, res) => {
  // const id = req.params.id; (둘중 선택)
  const { id } = req.params;

  if (id === "0") {
    res.status(404).json({
      message: "해당 게시물이 존재하지 않습니다.",
    });
  } else {
    res.status(200).json({
      message: "게시물 조회 성공",
    });
  }
});

module.exports = router;
