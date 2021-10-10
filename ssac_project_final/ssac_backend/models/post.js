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

module.exports = mongoose.model("post", postSchema);
