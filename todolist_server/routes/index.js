var express = require("express");
var router = express.Router();

const todosRouter = require("./todos/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/todos", todosRouter);

// /posts
// // 목적 : 투두 리스트 생성
// method : post
// url : /todos
// body : { id: 1, todoContent: "할일"}

// response
// 200
// { message: "할일이 추가 되었습니다."}
// 400
// { message: "이미 추가된 내용입니다."}

// // 투두 리스트 삭제 (id)
// method : delete
// url : /todos/:id
// body : {  todoContent: "할일"}
// params: {idx : num}

// response
// 200
// { message: "삭제가 완료되었습니다."}
// 400
// { message: "존재하지 않는 내용입니다."}

// // 투두 리스트 전체 조회
// method : get
// url : /todos
// body : { todoContent: "할일"}

// response
// 200
// { message: "조회 완료."}
// 400
// { message: "할일이 없습니다."}

// // 투두 리스트 수정 (id)
// method : put
// url : /todos/:id
// body : { todoContent: "할일"}
// params : {idx : num}

// response
// 200
// { message: "수정되었습니다.",
// data: [ {todoContent:'내일 할일'},{, todoContent:'내일 할일 2'}]}
// 400
// { message: "수정에 실패하였습니다"}

// //

module.exports = router;
