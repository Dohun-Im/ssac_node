const user = require("../../models/user");
const jwtModule = require("../../modules/jwtModule");

const AuthController = {
  signup: async (req, res) => {
    const { name, userId, password } = req.body;
    // 중복된 유저 존재하는지 찾은 뒤 없으면 저장
    try {
      const result = await user.findOne({ userId }); //아이디 중복 체크

      if (!result) {
        const userModel = new user({ name, userId, password });
        await userModel.save();
        res.status(200).json({
          message: "회원가입 성공",
        });
      } else {
        res.status(409).json({
          message: "중복된 아이디가 존재합니다.",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        messtae: "DB 서버 에러",
        error: error,
      });
    }
  },

  signin: async (req, res) => {
    const { userId, password } = req.body;

    try {
      const result = await user.findOne({ userId, password });

      if (result) {
        //로그인 성공

        const payload = {
          userId: result.userId, //id는 유니크하므로 식별가능.pw는 적으면 안됨! 해킹당할수도
          name: result.name,
        };

        const token = jwtModule.create(payload);
        console.log(token);

        res.status(200).json({
          message: "로그인 완료",
          accessToken: token,
        });
      } else {
        res.status(409).json({
          message: "아이디 또는 비밀번호가 일치하지 않습니다.",
        });
      }
    } catch {
      console.error(error);
      res.status(500).json({
        message: "DB 서버 에러",
        error: error,
      });
    }
  },
};

module.exports = AuthController;
