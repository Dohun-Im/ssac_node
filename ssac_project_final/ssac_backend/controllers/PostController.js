const user = require("../models/user");
const sc = require("../modules/statusCode");
const jwtModule = require("../modules/jwtModule");

const PostController = {
  createPost: async (req, res) => {
    const userInfo = req.userInfo;
    const { title, content, category, tags } = req.body;

    const postModel = new post({
      title,
      content,
      category,
      tags,
      publishedDate: new Date(),
      writer: userInfo._id,
    });

    try {
      const result = await postModel.save();
      res.status(200).json({
        message: " 게시 완료",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: " DB 서버 에러",
      });
    }
  },

  updatePost: async (req, res) => {
    const { id } = req.params;

    const { title, content, category, tags } = req;

    try {
      const updated = await post.findByIdAndUpdate(
        id,
        {
          title,
          content,
          category,
          tags,
          updatedDate: new Date(),
        },
        { new: true }
      );
      res.status(sc.OK).json({
        message: "게시물 수정 성공",
        data: updated,
      });
    } catch (error) {
      res.status(500).json({
        message: "게시물 수정 실패",
        error: error,
      });
      console.log(error);
    }
  },

  deletePost: async (req, res) => {
    const { id } = req.params;

    try {
      await post.findByIdAndDelete(id);
      res.status(sc.OK).json({
        message: "게시물 삭제 성공",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = PostController;
