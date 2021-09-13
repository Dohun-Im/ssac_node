const express = require("express");
const router = express.Router();

const commentsArr = [];

// 댓글 추가
router.post("/", (req, res) => {
  const { comment } = req.body;
  commentsArr.push(comment);
  res.status(200).json({
    message: "댓글 추가 완료",
  });
});

//전체 댓글 조회
router.get("/", (req, res) => {
  res.status(200).json({
    message: "전체 댓글 조회 완료",
    data: commentsArr,
  });
});

//특정 댓글(idx) 조회

router.get("/:idx", (req, res) => {
  res.status(200).json({
    message: "특정 댓글 조회 완료.",
  });
});

//특정 댓글(idx) 삭제
router.delete("/:idx", (req, res) => {
  res.status(200).json({
    message: "특정 댓글 삭제 완료",
  });
});

// 특정 댓글(idx) 수정
router.put("/:idx", (req, res) => {
  res.status(200).json({
    message: "댓글 수정 완료",
  });
});

// 특정 댓글(idx) 신고

router.put('/:idx/declare', {req, res} =>{
    res.status(200).json({
        message: "특정 댓글 신고 완료",
    })
})

// router.get("/:idx", (req, res) => {
//   // 1. 특정 댓글 찾기
//   const { idx } = req.params;
//   const findComment = commentsArr.findIndex((item) => item.idx === idx);
//   // 2. 찾은 댓글 신고
//   if (findComment === -1) {
//     res.status(404).json({
//       message: "해당 댓글이 없습니다",
//     });
//   } else {
//     // 신고후 삭제..?
//     const result = commentsArr[findCommnet];
//     router.delete("/:idx", (req, res) => {
//       const { idx } = req.params;
//       commentsArr.splice(idx, 1);
//       res.status(200).json({
//         message: "댓글 신고 완료",
//         data: commentsArr,
//       });
//     });
//   }
// });

module.exports = router;
