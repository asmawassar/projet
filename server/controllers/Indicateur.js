import mongoose from "mongoose";

import indicateur from "../models/Indicateur.js";

export const getIndicators = async (res) => {
  try {
    const indicator = await indicateur.find();
    res.status(200).json(indicator);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createIndicator = async (req, res) => {
  const { nomBarrage } = req.body;
  try {
    const newBarrage = new indicateur({
      nomBarrage,
    });
    await newBarrage.save();
    res.status(201).json(newBarrage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateIndicator = async (req, res) => {
  const {
    nomBarrage,
    stockBarrage,
    lachersAnnee,
    lachersMois,
    lachersJour,
    probs,
    moyPeriode,
    apportsCummule,
    moyMois,
    apportMois,
    apportJour,
    date,
    annee,
    mois,
  } = req.body;
  const updatedIndicator = await indicateur.findOneAndUpdate(
    { nomBarrage: nomBarrage },
    {
      $push: {
        stockBarrage: stockBarrage,
        date: date,
        annee: annee,
        mois: mois,
        lachersAnnee: lachersAnnee,
        lachersMois: lachersMois,
        lachersJour: lachersJour,
        probs: probs,
        moyPeriode: moyPeriode,
        apportsCummule: apportsCummule,
        moyMois: moyMois,
        apportMois: apportMois,
        apportJour: apportJour,
      },
    },
    { returnNewDocument: true }
  );

  res.json(updatedIndicator);
};

export const editIndicator = async (req, res) => {
  const {
    stockBarrage,
    lachersAnnee,
    lachersMois,
    lachersJour,
    probs,
    moyPeriode,
    apportsCummule,
    moyMois,
    apportMois,
    apportJour,
    date,
    annee,
    mois,
    id,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Indicator with id: ${id}`);

  const updatedIndicator = await indicateur.findOneAndUpdate(
    id,
    {
      $push: {
        stockBarrage: stockBarrage,
        date: date,
        annee: annee,
        mois: mois,
        lachersAnnee: lachersAnnee,
        lachersMois: lachersMois,
        lachersJour: lachersJour,
        probs: probs,
        moyPeriode: moyPeriode,
        apportsCummule: apportsCummule,
        moyMois: moyMois,
        apportMois: apportMois,
        apportJour: apportJour,
      },
    },
    { returnNewDocument: true }
  );

  res.json(updatedIndicator);
};
