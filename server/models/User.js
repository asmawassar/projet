import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
    },
    prenom: {
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
    naissance: {
      type: String,
      required: true,
    },
    sexe: {
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
    gouvernorat: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    entreprise: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("user", userSchema);

export default Users;