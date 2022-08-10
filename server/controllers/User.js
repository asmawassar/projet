import express from "express";
import bcrypt from "bcrypt";
import Users from "../models/User.js";

const router = express.Router();

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    if (!firstName || !lastName || !email || !password)
      return res.status(400).send({ msg: "Please fill in all fields." });

    if (!validateEmail(email))
      return res.status(400).send({ msg: "Invalid email." });

    const user = await Users.findOne({ email: req.body.email });
    if (user)
      return res.status(409).send({ msg: "this email already exists." });

    if (password.length < 6)
      return res
        .status(400)
        .send({ msg: "Password must be at least 6 characters." });

    const salt = await bcrypt.genSalt(Number(10));
    const hashPass = await bcrypt.hash(req.body.password, salt);

    await new Users({ ...req.body, password: hashPass }).save();

    res.status(201).send({ msg: "Account has been activated!" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: err.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user)
      return res.status(400).send({ msg: "This email does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).send({ msg: "Password is incorrect." });

    res.send({ msg: "Login success!" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
