import mongoose from "mongoose";

const Barrage = new mongoose.Schema(
  {
    nomBarrage: {
      type: String,
      required: [true, "Please enter Indicator name"],
      trim: true,
      unique: true,
    },
    /********STOCKS********/
    StockJour: {
      type: [Number],
      required: true,
    },
    StockBarrage: {
      type: [Number],
      required: true,
    },
    pourcentageStock: {
      type: Number,
      required: true,
    },
    /********LACHER********/
    LacherJour: {
      type: [Number],
      required: true,
    },
    LacherJourL: {
      type: [Number],
      required: true,
    },

    LacherLastYear: {
      type: Number,
      required: true,
    },
    LacherThisYear: {
      type: Number,
      required: true,
    },
    LacherMois: {
      type: Number,
      required: true,
    },
    probs: {
      type: String,
      required: true,
    },
    /********APPORTS********/
    MoyPeriode: {
      type: Number,
      required: true,
    },
    cumuleLastYear: {
      type: Number,
      required: true,
    },
    cumuleThisYear: {
      type: Number,
      required: true,
    },
    moyMois: {
      type: Number,
      required: true,
    },
    apportMois: {
      type: Number,
      required: true,
    },
    apportJour: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Barrage", Barrage);

export default model;
