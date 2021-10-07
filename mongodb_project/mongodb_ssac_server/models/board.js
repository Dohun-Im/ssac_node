const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  writeTime: { type: Date, default: new Date(), required: true },
  boardPw: { type: String, required: true },
  writer: {
    //관계형 처럼 collection 간에 관계 만들어주기
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

// this 는 boardSchema를 가리킴
boardSchema.statics.checkAuth = async function (params) {
  const { boardId, writerId } = params;

  try {
    const ownResult = await this.findOne({ _id: boardId });
    //게시물의 _id, this 는 boardSchema를 가리킴
    const ownId = ownResult.writer;
    if (ownId.toString() !== writerId.toString()) {
      return -1;
    }

    return 1;
    // res.status(409).json({ message: "접근 권한이 없습니다." });
  } catch (error) {
    return -2;
    // console.log(error);
    // res.status(500).json({
    //   message: "DB 서버 에러",
    // });
  }
};

//이 this 는 스키마 안의 document를 가리킴
boardSchema.methods.checkMe = function () {
  this.title;
};

module.exports = mongoose.model("board", boardSchema);
