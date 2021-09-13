const express = require("express");
const router = express.Router();

let todosArr = [];

//생성
router.post("/", (req, res) => {
  const { id, todoContent } = req.body;

  const todosIdx = todosArr.findIndex((item) => item.id === id);

  if (todosIdx === -1) {
    todosArr.push({ id, todoContent });
    res.status(200).json({
      message: "할일이 추가되었습니다.",
      data: todosArr,
    });
  } else {
    res.status(400).json({
      message: "추가에 실패했습니다.",
      data: todosArr,
    });
  }
});

//전체 조회

router.get("/", (req, res) => {
  // if (todosArr.length === 0) {
  //   res.status(400).json({
  //     message: "조회에 실패했습니다",
  //   });
  // } else {
  //   res.status(200).json({
  //     message: "조회가 완료되었습니다.",
  //     data: todosArr,
  //   });
  // }
  todosArr = [];
  res.status(200).json({
    message: "전체 초기화 완료",
    data: todosArr,
  });
});

//리스트 수정

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { todoContent } = req.body;

//   const todosIdx = todosArr.findIndex((item) => {
//     return item.id === id;
//   });
//   if (todosIdx === -1) {
//     res.status(400).json({
//       message: "수정에 실패했습니다.",
//     });
//   } else {
//     todosArr.todosIdx = { todocContent };
//     res.status(200).json({
//       message: "수정이 완료 되었습니다.",
//       data: todosArr,
//     });
//   }
// });

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { todoContent } = req.body;

  const todosIdx = todosArr.findIndex((item) => item.id === Number(id));
  /// 저장값은 num , params로 받는 값은 문자열 형태로옴
  if (todosIdx === -1) {
    // 정보가 존재하지 않을 경우
    res.status(400).json({
      message: "수정에 실패했습니다.",
    });
  } else {
    todosArr[todosIdx] = { id: Number(id), todoContent };
    res.status(200).json({
      message: "수정완료",
      data: todosArr,
    });
  }
});

// 삭제
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const todosIdx = todosArr.findIndex((item) => item.id === Number(id));

  if (todosIdx === -1) {
    res.status(400).json({
      message: "삭제에 실패했습니다.",
    });
  } else {
    todosArr.splice(todosIdx, 1);
    res.status(200).json({
      message: "수정이 완료 되었습니다.",
      data: todosArr,
    });
  }
});

module.exports = router;
