const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  nickName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: {
    type: String,
    enum: ["모더나", "화이자", "AZ", "얀센", null],
    default: null,
  },
  age: { type: Number, default: null },
  gender: { type: Number, enum: [0, 1, 2], default: 1 },
  degree: { type: Number, default: null },
  inoDate: { type: Date, default: null },
  verifed: { type: Boolean, default: false },
  profileImage: { type: String, default: null },
});

module.exports = mongoose.model("user", userSchema);
