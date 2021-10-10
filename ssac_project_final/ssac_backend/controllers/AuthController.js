//에러 상태마다 status code는 다르게

const user = require("../models/user");
const sc = require("../modules/statusCode");
const jwtModule = require("../modules/jwtModule");

const AuthController = {
  signup: async (req, res) => {
    const { email, password, nickName } = req.body;
    try {
      const checkemail = await user.findOne({ email });
      const checkNickName = await user.findOne({ nickName });

      if (!checkemail && !checkNickName) {
        const userModel = new user({ email, password, nickName });
        await userModel.save();
        res.status(sc.OK).json({
          message: "회원가입 성공",
        });
      } else if (checkemail) {
        res.status(409).json({
          message: "중복된 이메일 존재",
        });
      } else if (checkNickName) {
        res.status(409).json({
          message: "중복된 닉네임 존재",
        });
      }
    } catch (Error) {
      console.error(error);
      res.status(500).json({
        messtae: "DB 서버 에러",
        error: error,
      });
    }
  },

  signin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await user.findOne({ email: email });

      if (!result) {
        return res.status(409).json({
          message: "해당 email이 존재하지 않습니다.",
        });
      } else {
        if (password !== result.password) {
          return res.status(409).json({
            message: "비밀번호가 일치하지 않습니다.",
          });
        } else {
          const payload = {
            nickName: result.nickName,
            verified: result.verified,
          };
          const token = jwtModule.create(payload);
          console.log(token);

          res.status(200).json({
            message: "로그인 성공",
            accessToken: token,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "서버 에러",
        error: error,
      });
    }
  },
  updateProfile: (req, res) => {
    //로그인 상태에서만 가능하도록. -> 미들웨어 받아와야
    // 근데 미들웨어 받아오면 verified가 false이므로 바로 에러가 떠버림
    // const userInfo = req.userInfo;
    // const
    // const {type, age, gender, degree, inoDate, verified, profileImage } = req.body;
  },

  deleteProfile: (req, res) => {
    //로그인 상태에서만 가능하도록 -> 미들웨어 받아와야
  },
};

module.exports = AuthController;
