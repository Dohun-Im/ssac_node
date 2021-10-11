const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: Number, default: 0 },
  tags: [String],
  publishedDate: { type: Date, default: new Date() },
  updatedDate: { type: Date, default: null },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  comments: [
    {
      commentWriter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      commentContent: { type: String, required: true },
      commentDate: { type: Date, default: new Date() },
    },
  ],
});

postSchema.statics.checkWriter = async function (params) {
  const { postId, writerId } = params;
  try {
    const ownPost = await this.findOne({ _id: postId }); //this는 schema 혹은 model
    const ownId = ownPost.writer;
    if (ownId.toString() !== writerId.toString()) return -1;
    else return 1;
  } catch (error) {
    return -2;
  }
};

module.exports = mongoose.model("post", postSchema);
