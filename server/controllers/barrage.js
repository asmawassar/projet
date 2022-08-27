import mongoose from "mongoose";

import indicateur from "../models/Indicateur.js";
import barrage from "../models/barrage.js";

export const createBarrage = async (req, res) => {
  const {
    nomBarrage,
    gouvernorat,
    capaciteInitiale,
    capaciteUtile,
    coursEau,
    dateDebutTravaux,
    dateMiseService,
    description,
  } = req.body;
  try {
    const newIndicateur = new indicateur({
      nomBarrage,
    });
    const newBarrage = new barrage({
      nomBarrage,
      gouvernorat,
      capaciteInitiale,
      capaciteUtile,
      coursEau,
      dateDebutTravaux,
      dateMiseService,
      description,
    });
    await newIndicateur.save();
    await newBarrage.save();
    res.status(201).json(newBarrage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
