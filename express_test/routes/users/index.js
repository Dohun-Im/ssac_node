const express = require("express");
const router = express.Router();

// 유저 생성
const usersArr = [];

router.post("/", (req, res) => {
  const { name, age, love } = req.body;

  // 없으면 -1, 있으면 index를 return
  const userIdx = usersArr.findIndex((item, index) => {
    // item = {name : 'lee', age : ......}
    return item.name === name;
  });
  //   userIdxArr.push({
  //     name: name,
  //     age: age,
  //     love: love,
  //이렇게 key랑 변수명 같으면 key값 생략가능
  if (userIdx === -1) {
    usersArr.push({
      name,
      age,
      love,
    });
    console.log(usersArr);
    res.status(200).json({
      message: "유저가 성공적으로 생성 되었습니다.",
    });
  } else {
    res.status(409).jseon({
      message: "중복된 이름이 존재합니다",
    });
  }
});

// router.get("/:name", (req, res) => {
//   const{ name } = req.params;
//     const findUser = usersArr.findIndex((item, index) => {
//         return item.name === name;
//   });

//   if (findUser === -1) {
//     res.status(404).json({
//       message: "유저 정보가 없습니다.",
//     });
//   } else {
//     res.status(200).json({
//       message: "유저를 찾았습니다.",
//       data: {
//         name,
//         age,
//         love,
//       },
//     });
//   }
// });

//유저 조회
router.get("/:name", (req, res) => {
  const { name } = req.params;
  const findUser = usersArr.findIndex((item) => item.name === name);

  if (findUser === -1) {
    res.status(404).json({
      message: "유저 정보가 없습니다.",
    });
  } else {
    const result = usersArr[findUser];
    res.status(200).json({
      message: "유저를 찾았습니다.",
      data: {
        name,
        age,
        love,
      },
    });
  }
});

//유저 전체 조회
router.get("/", (req, res) => {
  res.status(200).json({
    message: "전체데이터 조회",
    data: usersArr,
  });
});

//유저 수정
router.put("/:idx", (req, res) => {
  const { idx } = req.params;
  const { name, age, love } = req.body;

  if (usersArr[idx]) {
    // 유저가 있을 경우
    usersArr[idx] = { name, age, love };
    res.status(200).json({
      message: "수정 완료",
      data: usersArr[idx],
    });
  } else {
    res.status(400).json({
      message: "유저를 찾지 못했습니다.",
    });
  }
});

//유저 삭제
// router.delete("/:idx", (req, res) => {
//   const { idx } = req.params;

//   if (usersArr[idx]) {
//     // usersArr.splice(usersArr.idx);\
//     let filtered = usersArr.filter((element) => element !== idx);
//     res.status(200).json({
//       message: "삭제 성공",
//       data: filtered,
//     });
//   } else {
//     res.status(400).json({
//       message: "유저를 찾을 수 없습니다.",
//     });
//   }
// });

router.delete("/:idx", (req, res) => {
  const { idx } = req.params;

  if (idx < 0 || idx >= usersArr.length) {
    res.status(400).json({
      message: "올바르지 않은 index 값 입니다.",
    });
  }

  if (usersArr[idx]) {
    //유저가 있다
    usersArr.splice(idx, 1);
    res.status(200).json({
      message: "유저를 삭제했습니다.",
      data: usersArr,
    });
  } else {
    //유저가 없다
    res.status(400).json({
      message: "유저를 찾을 수 없습니다.",
    });
  }
});

// 게시물 안에 좋아요 수를 증가or감소 시키는 api를 만든다고 가정
// resource = posts / likes
// method : update

module.exports = router;
