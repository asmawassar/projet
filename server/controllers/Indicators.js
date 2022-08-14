import mongoose from "mongoose";

import Barrage from "../models/Indicator.js";

export const getIndicator = async (req, res) => {
  const { id } = req.params;

  try {
    const indicat = await Barrage.findById(id);
    res.status(200).json(indicat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBarrage = async (req, res) => {
  const {
    nomBarrage,
    StockJour,
    StockBarrage,
    pourcentageStock,
    LacherJour,
    LacherJourL,
    LacherLastYear,
    LacherThisYear,
    LacherMois,
    probs,
    MoyPeriode,
    cumuleLastYear,
    cumuleThisYear,
    moyMois,
    apportMois,
    apportJour,
  } = req.body;
  try {
    const user = await Barrage.findOne({ nomBarrage });

    if (user)
      return res.status(400).json({ msg: "This barrage already exists." });
    if (
      !nomBarrage ||
      !StockJour ||
      !StockBarrage ||
      !pourcentageStock ||
      !LacherJour ||
      !LacherJourL ||
      !LacherLastYear ||
      !LacherThisYear ||
      !LacherMois ||
      !probs ||
      !MoyPeriode ||
      !cumuleLastYear ||
      !cumuleThisYear ||
      !moyMois ||
      !apportMois ||
      !apportJour
    )
      return res.status(400).json({ message: "Please fill in all fields." });

    const newBarrage = new Barrage({
      nomBarrage,
      StockJour,
      StockBarrage,
      pourcentageStock,
      LacherJour,
      LacherJourL,
      LacherLastYear,
      LacherThisYear,
      LacherMois,
      probs,
      MoyPeriode,
      cumuleLastYear,
      cumuleThisYear,
      moyMois,
      apportMois,
      apportJour,
    });
    await newBarrage.save();

    res.status(201).json(newBarrage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateIndicator = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Indicator with id: ${id}`);

  const updatedIndicator = {
    creator,
    title,
    message,
    tags,
    selectedFile,
    _id: id,
  };

  await indicator.findByIdAndUpdate(id, updatedIndicator, { new: true });

  res.json(updatedIndicator);
};
