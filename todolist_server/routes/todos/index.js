const express = require("express");
const router = express.Router();

const con = require("../../modules/mysql");

let todosArr = [];

//생성
router.post("/", (req, res) => {
  const { todoContent } = req.body;
  const sql = `insert into ssac_todolist (todoContent, checked) values(?,?)`;

  const params = [todoContent, 0];

  con.query(sql, params, (err, result, fields) => {
    if (err)
      return res.status(400).json({
        message: "생성 실패",
      });

    res.status(200).json({
      message: "생성완료",
    });
  });
});

//전체 조회

router.get("/", (req, res) => {
  //전체데이터 조회
  con.query("select * from ssac_todolist", (err, result, fields) => {
    if (err)
      return res.status(400).json({
        messgae: "조회실패",
      });

    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { todoContent } = req.body;

  const sql = "update ssac_todolist set todoContent=?, checked=? where id=?";

  const params = [todoContent, 0, Number(id)];

  con.query(sql, params, (err, result, fields) => {
    if (err)
      return res.status(400).json({
        messgae: "수정 실패",
      });

    res.status(200).json({
      message: "수정 완료",
    });
  });
});

// 체크키를 누르면 체크 키 값이 변경. 0 ->1로
router.put("/:checked", (req, res) => {
  const { checked } = req.params;
  const { todoContent } = req.body;

  const sql = "update ssac_todolist set id=?, todoContent=? where checked=?";

  const params = [Number(id), todoContent, Number(checked)];

  con.query(sql, params, (err, result, fields) => {
    if (err)
      return res.status(400).json({
        messgae: "수정 실패",
      });

    res.status(200).json({
      message: "수정 완료",
    });
  });
});

// 삭제
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "delete from ssac_todolist where id=?";

  const params = [Number(id)];

  con.query(sql, params, (err, result, fields) => {
    if (err)
      return res.status(400).json({
        messgae: "삭제 실패",
      });

    res.status(200).json({
      message: "삭제 완료",
    });
  });
});

module.exports = router;
