import mongoose from "mongoose";

import indicateur from "../models/Indicateur.js";

export const getIndicators = async (req, res) => {
  try {
    const indicator = await indicateur.find();
    res.status(200).json(indicator);
  } catch (error) {
    res.status(404).json({ message: error });
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
  console.log(req.body);
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
    id,
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
