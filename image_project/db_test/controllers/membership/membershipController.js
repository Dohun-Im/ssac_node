const { none } = require("../../modules/awsUpload");
const con = require("../../modules/mysql");
// const upload = require("../../modules/awsUpload");

const membershipController = {
  readAllMembership: (req, res) => {
    const sql = "select * from membership";

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

  detailMembership: (req, res) => {
    const { gender } = req.params;
    const sql = "select * from membership where gender=?";
    const params = [Number(gender)];

    if (Number(gender) === 0 || Number(gender) === 1) {
      con.query(sql, params, (err, result) => {
        if (err)
          return res.status(400).json({
            message: "조회 실패",
          });

        res.status(200).json({
          message: "조회 성공",
          data: result,
        });
      });
    } else {
      res.status(401).json({
        // 오류번호는 중첩되면 안됨!
        message: "옳지 않은 gender 값 입니다.",
      });
    }
  },
  uploadImage: (req, res, err) => {
    const img = req.file; // req.body가 아니라 req.file로 받아옴
    console.log(img);

    // postman에서 header값 dataform으로
    if (img) {
      res.status(200).json({
        message: "이미지 업로드 완료",
        imgUrl: img.location, // location으로 img의 url 가져오기!
      });
    } else {
      res.status(400).json({
        message: "이미지 업로드 실패",
      });
    }
  },

  uploadMembership: (req, res) => {
    const { gender, title, img } = req.body;
    const sql = "insert into membership (gender, title, img) values (?, ?, ?)";
    const params = [gender, title, img];

    // postman에서 headr값 application/json으로
    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "에러가 발생했습니다.",
        }); // return 으로 err가 걸리면 바로 if문 탈출하므로 else 노필요
      res.status(200).json({
        message: "생성이 완료되었습니다.",
      });
    });
  },
};

module.exports = membershipController;
