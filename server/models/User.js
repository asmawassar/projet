import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import JoiPasswordComplexity from "joi-password-complexity";
import Joi from "joi";

const jwt = jsonwebtoken;
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    birthDate: {
      type: String,
      required: true,
    },

    sex: {
      type: String,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    password: {
      type: String,
      default: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.method.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTKEY, {
    expiresIn: "2d",
  });
  return token;
};

const Users = mongoose.model("user", userSchema);

export default Users;
