import mongoose from "mongoose";

const Indicateur = new mongoose.Schema(
  {
    nomBarrage: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    /********STOCKS********/
    stockBarrage: {
      type: [Number],
      required: true,
    },
    /********LACHER********/

    lachersAnnee: {
      type: [Number],
      required: true,
    },

    lachersMois: {
      type: [Number],
      required: true,
    },
    lachersJour: {
      type: [Number],
      required: true,
    },
    probs: {
      type: [String],
      required: true,
    },
    /********APPORTS********/
    moyPeriode: {
      type: [Number],
      required: true,
    },
    apportsCummule: {
      type: [Number],
      required: true,
    },
    moyMois: {
      type: [Number],
      required: true,
    },
    apportMois: {
      type: [Number],
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
    mois: {
      type: [String],
      required: true,
    },
    annee: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Indicateur", Indicateur);

export default model;