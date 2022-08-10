import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import JoiPasswordComplexity from "joi-password-complexity";
import Joi from "joi";

const jwt = jsonwebtoken;
const passwordComplexity = JoiPasswordComplexity;
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: 6,
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

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

export default Users;
