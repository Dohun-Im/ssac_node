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
    } catch (error) {
      console.log(error);
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
        result.comparePassword(password, (err, isMatch) => {
          if (isMatch) {
            console.log("pw 일치");
            const payload = {
              nickName: result.nickName,
              verified: result.verified,
            };
            const token = jwtModule.create(payload);
            console.log(token);

            return res.status(200).json({
              message: "로그인 성공",
              accessToken: token,
            });
          } else {
            console.log("ow 불일치");
            return res.status(409).json({
              message: "비밀번호가 일치하지 않습니다.",
            });
          }
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "서버 에러",
        error: error,
      });
    }
  },
  // getAllProfile: (req, res) => {
  //   const userInfo = req.userInfo;

  //   if (userInfo) {
  //     res.status(sc.OK).json({
  //       message: "프로필 조회 성공",
  //       data: userInfo,
  //     });
  //   } else {
  //     res.status(400).json({
  //       message: "프로필 조회 실패",
  //     });
  //   }
  // },

  getDetailPorfile: (req, res) => {
    const userInfo = req.userInfo;

    if (userInfo) {
      return res.status(sc.OK).json({
        message: "프로필 조회 성공",
        data: userInfo,
      });
    } else {
      res.status(500).json({
        message: "프로필 조회 실패",
      });
    }
  },

  updateProfile: async (req, res) => {
    const userInfo = req.userInfo;
    const img = req.file;
    const { type, age, gender, degree } = req.body;

    try {
      const result = await user.findByIdAndUpdate(
        userInfo.id,
        {
          type,
          age,
          gender,
          degree,
          inoDate1: new Date(),
          inoDate2: new Date(),
          profileImage: img.location,
          verified: true,
        },
        { new: true }
      );

      const payload = {
        nickName: result.nickName,
        verified: result.verified,
      };
      const token = jwtModule.create(payload);
      console.log(token);

      res.status(sc.OK).json({
        message: "회원정보 수정을 완료했습니다.",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  deleteProfile: async (req, res) => {
    const userInfo = req.userInfo;

    try {
      const result = await user.findByIdAndDelete(userInfo.id);
      res.status(sc.OK).json({
        message: "회원 탈퇴가 완료되었습니다.",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = AuthController;
