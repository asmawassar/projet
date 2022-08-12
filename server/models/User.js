import mongoose from "mongoose";

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

    role: {
      type: String,
      default: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("user", userSchema);

export default Users;
