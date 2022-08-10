import mongoose from "mongoose";

import indicator from "../models/Indicator.js";

export const getIndicator = async (req, res) => {
  const { id } = req.params;

  try {
    const indicat = await indicator.findById(id);
    res.status(200).json(indicat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createIndicator = async (req, res) => {
  const { indicatorName, gg, gf, ggf, ggff } = req.body;
  const user = await indicator.findOne({ indicatorName });

  if (user)
    return res.status(400).json({ msg: "This indicator already exists." });

  try {
    const newIndicator = new indicator({ indicatorName, gg, gf, ggf, ggff });
    await newIndicator.save();

    res.status(201).json(newIndicator);
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
