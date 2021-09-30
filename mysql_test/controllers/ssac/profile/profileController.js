const { none } = require("../../modules/awsUpload");
const con = require("../../modules/mysql");

const profileController = {
  uploadImage: (req, res, err) => {
    const img = req.file;

    if (img) {
      res.status(200).json({
        message: "이미지 업로드 완료",
        imgUrl: img.location,
      });
    } else {
      res.status(400).json({
        message: "이미지 업로드 실패",
      });
    }
  },

  readAllProfile: (req, res) => {
    const sql = "select * from profile";

    con.query(sql, (err, result) => {
      if (err)
        return res.status(400).json({
          message: "조회 실패",
        });
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    });
  },

  uploadProfile: (req, res) => {
    const { name, profileUrl } = req.body;
    const sql =
      "insert into profile (name, profileUrl, createdDate) values ( ?, ?, ?)";
    const params = [name, profileUrl, new Date()];

    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "에러가 발생했습니다.",
        });
      res.status(200).json({
        message: "생성이 완료되었습니다.",
      });
    });
  },
};

module.exports = profileController;
