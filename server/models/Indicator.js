import mongoose from "mongoose";

const Indicator = new mongoose.Schema(
  {
    IndicatorName: {
      type: String,
      required: [true, "Please enter Indicator name"],
      trim: true,
      unique: true,
    },

    StockJour: {
      type: [Number],
      required: true,
    },
    StockBarrage: {
      type: Number,
      required: true,
    },

    LacherJour: {
      type: [Number],
      required: true,
    },
    LacherLastJour: {
      type: Number,
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

    MoyPeriode: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("IndicatorData", Indicator);

export default model;
