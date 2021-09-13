const express = require("express");
const router = express.Router();

const categoriesRouter = require("./categories/index");

devicesArr = [];

//기기정보 업로드
router.post("/", (req, res) => {
  const { name, version, price } = req.body;

  //필수입력란 만들기
  if (!name && !version && !price)
    return { message: "데이터 값을 확인해주세요" };

  const devicesIdx = devicesArr.findIndex((item) => {
    return item.name === name;
  });
  if (devicesIdx === -1) {
    devicesArr.push({ name, version, price });
    res.status(200).json({
      message: "기기정보 추가가 완료 되었습니다.",
    });
  } else {
    res.status(400).json({
      message: "중복된 기기가 존재합니다.",
    });
  }
});

router.get("/", (req, res) => {
  if (devicesArr.length === 0) {
    res.status(401).json({
      message: "기기정보가 없습니다.",
    });
  } else {
    res.status(200).json({
      data: devicesArr,
    });
  }
});

//특정 기기 정보 조회
router.get("/:idx", (req, res) => {
  //인덱스 값 확인하기

  const { idx } = req.params;
  const devicesIdx = devicesArr.findIndex((item) => item.name === idx);

  if (idx < 0 || idx >= devicesArr.length)
    return res.status(409).json({
      message: "인덱스 에러",
    });

  if (devicesIdx === -1) {
    res.status(401).json({
      message: "기기 정보가 존재하지 않습니다.",
    });
  } else {
    const result = devicesArr[devicesIdx];
    res.status(200).json({
      message: "기기 정보 조회 완료.",
      //   data: { idx, version, price },
      data: devicesArr[idx],
    });
  }
});

//기기 정보 수정
router.put("/:idx", (req, res) => {
  const { idx } = req.params;
  const { name, version, price } = req.body;

  if (devicesArr[idx]) {
    devicesArr[idx] = { name, version, price };
    res.status(200).json({
      message: "기기정보 수정이 완료 되었습니다.",
      data: devicesArr[idx],
    });
  } else {
    res.status(400).json({
      message: "기기정보가 존재하지 않습니다.",
    });
  }
});

// 기기정보 삭제

router.delete("/:idx", (req, res) => {
  const { idx } = req.params;

  if (devicesArr[idx]) {
    devicesArr.splice(idx, 1);
    res.status(200).json({
      message: "기기 삭제가 완료되었습니다.",
    });
  } else {
    res.status(400).json({
      message: "기기정보가 존재하지 않습니다.",
    });
  }
});

//categories

router.use("/categories", categoriesRouter);

module.exports = router;
