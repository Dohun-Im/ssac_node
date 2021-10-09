const board = require("../../models/board");
const jwtModule = require("../../modules/jwtModule");
const user = require("../../models/user");

const BoardController = {
  createBoard: async (req, res) => {
    const userInfo = req.userInfo;

    const { title, content, boardPw } = req.body;

    const boardModel = new board({
      title,
      content,
      writeTime: new Date(),
      boardPw,
      writer: userInfo._id,
    });

    try {
      const result = await boardModel.save();
      res.status(200).json({
        message: "저장 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  readAllBoard: async (req, res) => {
    try {
      const result = await board.find().populate("writer", "name userId"); //find에서 찾고 populate로 wirter부분을 치환!
      if (!result) return res.status(400).json({ message: "조회 실패" });

      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버에러",
      });
    }
  },

  readIdBoard: async (req, res) => {
    //추가코드

    const { id } = req.params;

    // 추가코드
    try {
      const result = await board.findById(id); //findById(id)도 동일
      if (!result) return res.status(400).json({ message: "조회 할 값 없음" });

      res.status(200).json({
        message: "조회 성공",
        data: result, //추가코드
      });
      console.log(result);
    } catch (error) {
      res.status(500).json({
        message: "DB 서버에러",
      });
    }
  },

  deleteBoard: async (req, res) => {
    const userInfo = req.userInfo;
    const { id } = req.params;

    // 일치하는 회원인지 아닌지 확인

    const ownResult = await board.checkAuth({
      boardId: id,
      writerId: userInfo._id,
    });
    if (ownResult === -1) {
      return res.status(409).json({ message: "접근 권한이 없습니다." });
    } else if (ownResult === -2) {
      return res.status(500).json({
        message: "DB 서버 에러",
      });
    }

    try {
      await board.findByIdAndDelete(id); // findOneAndDelete{_id:id}
      res.status(200).json({
        message: "삭제 성공",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버에러",
      });
    }
  },

  updateBoard: async (req, res) => {
    const userInfo = req.userInfo;

    const { id } = req.params;

    const { title, content, boardPw } = req.body;

    // 일치하는 회원인지 아닌지 확인
    const ownResult = await board.checkAuth({
      boardId: id,
      writerId: userInfo._id,
    });
    if (ownResult === -1) {
      return res.status(409).json({ message: "접근 권한이 없습니다." });
    } else if (ownResult === -2) {
      return res.status(500).json({
        message: "DB 서버 에러",
      });
    }

    try {
      const result = await board.findByIdAndUpdate(
        id,
        {
          title,
          content,
          boardPw,
        },
        { new: true }
      );
      res.status(200).json({
        message: "업데이트 완료",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = BoardController;
//body 파람스값으로 받아오기~

//const updateResult = await board.findByIdAndUpdate(id, {title, content});

// 위와 같은 코드임
// const result = await board.findById(_id);
// result.title = title;
// result.content = content;
// await result.save()
