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
  const {
    nom,
    prenom,
    email,
    naissance,
    sexe,
    password,
    gouvernorat,
    occupation,
    entreprise,
    tel,
  } = req.body;
  try {
    if (
      !nom ||
      !prenom ||
      !naissance ||
      !sexe ||
      !gouvernorat ||
      !occupation ||
      !entreprise ||
      !tel ||
      !email ||
      !password
    )
      return res.status(400).json({ message: "Merci de remplir tous les champs." });

    if (!validateEmail(email))
      return res.status(400).json({ message: "Adresse Mail invalide" });

    const user = await Users.findOne({ email: req.body.email });
    if (user)
      return res.status(400).json({ message: "Cette Adresse Mail existe déjà." });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Le Mot De Passe doit être au moins de 6 caractères." });

    const salt = await bcrypt.genSalt(Number(10));
    const hashPass = await bcrypt.hash(req.body.password, salt);

    await new Users({ ...req.body, password: hashPass }).save();

    res.status(201).json({ message: "Le compte a été activé !" });
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
      return res.status(400).json({ message: "Adresse Mail invalide" });
    if (!user)
      return res.status(400).json({ message: "Cette Adresse Mail n'existe pas." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Le mot de passe est incorrect." });
    res.json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { role, id } = req.body;
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
