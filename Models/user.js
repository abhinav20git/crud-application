const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true,"email is Required"],
      unique: [true,"already in database"],
    },
    mobile: {
      type: String,
      required: [true,"mobile is Required"],
      unique: [true,"already in database"],
    },
    hobbies: {
      type: String,
      required: [true,"email is Required"],
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
