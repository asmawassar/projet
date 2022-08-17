import bcrypt from "bcrypt";
import Users from "../models/User.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const signUp = async (req, res) => {
  const { firstName, lastName, email, birthDate, sex, password } = req.body;
  try {
    if (!firstName || !birthDate || !sex || !lastName || !email || !password)
      return res.status(400).json({ message: "Please fill in all fields." });

    if (!validateEmail(email))
      return res.status(400).json({ message: "Invalid email." });

    const user = await Users.findOne({ email: req.body.email });
    if (user)
      return res.status(400).json({ message: "this email already exists." });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });

    const salt = await bcrypt.genSalt(Number(10));
    const hashPass = await bcrypt.hash(req.body.password, salt);

    await new Users({ ...req.body, password: hashPass }).save();

    res.status(201).json({ message: "Account has been activated!" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!validateEmail(email))
      return res.status(400).json({ message: "Invalid email." });
    if (!user)
      return res.status(400).json({ message: "This email does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Password is incorrect." });
    res.json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { role, id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  const updateduser = {
    role: role,
  };
  await Users.findByIdAndUpdate(id, updateduser, { new: true });

  res.json(updateduser);
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
