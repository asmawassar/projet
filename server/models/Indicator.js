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
    stockBarrageC: {
      type: [Number],
      required: true,
    },
    stockBarrageP: {
      type: [Number],
      required: true,
    },
    pourcentageStock: {
      type: Number,
      required: true,
    },
    /********LACHER********/
    lachersAnneeP: {
      type: [Number],
      required: true,
    },
    lachersAnneeC: {
      type: [Number],
      required: true,
    },

    lachersMoisC: {
      type: Number,
      required: true,
    },
    lachersJourP: {
      type: Number,
      required: true,
    },
    lachersJourC: {
      type: Number,
      required: true,
    },
    probs: {
      type: String,
      required: true,
    },
    /********APPORTS********/
    moyPeriode: {
      type: Number,
      required: true,
    },
    apportsCummuleP: {
      type: Number,
      required: true,
    },
    apportsCummuleC: {
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
    date: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Barrage", Barrage);

export default model;
