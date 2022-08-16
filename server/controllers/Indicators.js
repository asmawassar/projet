import mongoose from "mongoose";

import Barrage from "../models/Indicator.js";

export const getIndicator = async (req, res) => {
  try {
    const indicat = await Barrage.find();
    res.status(200).json(indicat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBarrage = async (req, res) => {
  const {
    nomBarrage,
    stockBarrageC,
    stockBarrageP,
    pourcentageStock,
    lachersAnneeP,
    lachersAnneeC,
    lachersMoisC,
    lachersJourP,
    lachersJourC,
    probs,
    moyPeriode,
    apportsCummuleP,
    apportsCummuleC,
    moyMois,
    apportMois,
    apportJour,
    date,
  } = req.body;
  try {
    const user = await Barrage.findOne({ nomBarrage });

    if (user)
      return res.status(400).json({ msg: "This barrage already exists." });
    if (
      !nomBarrage ||
      !stockBarrageC ||
      !stockBarrageP ||
      !pourcentageStock ||
      !lachersAnneeP ||
      !lachersAnneeC ||
      !lachersMoisC ||
      !lachersJourP ||
      !lachersJourC ||
      !probs ||
      !moyPeriode ||
      !apportsCummuleP ||
      !apportsCummuleC ||
      !moyMois ||
      !apportMois ||
      !apportJour ||
      !date
    )
      return res.status(400).json({ message: "Please fill in all fields." });

    const newBarrage = new Barrage({
      nomBarrage,
      stockBarrageC,
      stockBarrageP,
      pourcentageStock,
      lachersAnneeP,
      lachersAnneeC,
      lachersMoisC,
      lachersJourP,
      lachersJourC,
      probs,
      moyPeriode,
      apportsCummuleP,
      apportsCummuleC,
      moyMois,
      apportMois,
      apportJour,
      date,
    });
    await newBarrage.save();

    res.status(201).json(newBarrage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateIndicator = async (req, res) => {
  const {
    StockBarrageC,
    stockBarrageP,
    pourcentageStock,
    lachersAnneeP,
    lachersAnneeC,
    lachersMoisC,
    lachersJourP,
    lachersJourC,
    probs,
    moyPeriode,
    apportsCummuleP,
    apportsCummuleC,
    moyMois,
    apportMois,
    apportJour,
    date,
    id,
  } = req.body;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Indicator with id: ${id}`);

  const updatedIndicator = {
    stockBarrageC: StockBarrageC,
    stockBarrageP: stockBarrageP,
    pourcentageStock: pourcentageStock,
    lachersAnneeP: lachersAnneeP,
    lachersAnneeC: lachersAnneeC,
    lachersMoisC: lachersMoisC,
    lachersJourP: lachersJourP,
    lachersJourC: lachersJourC,
    probs: probs,
    moyPeriode: moyPeriode,
    apportsCummuleP: apportsCummuleP,
    apportsCummuleC: apportsCummuleC,
    moyMois: moyMois,
    apportMois: apportMois,
    apportJour: apportJour,
    date: date,
  };

  await Barrage.findByIdAndUpdate(id, updatedIndicator, { new: true });

  res.json(updatedIndicator);
};
