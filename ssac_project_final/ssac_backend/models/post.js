const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: Number, required: true, default: 0, enum: [] },
  tags: [String],
  publishedDate: { type: Date, default: Date.now, required: true },
  updatedDate: { type: Date, required: true },
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
      commentDate: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("post", postSchema);
