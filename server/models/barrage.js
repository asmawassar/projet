import mongoose from "mongoose";

const barrage = new mongoose.Schema(
    {
        nomBarrage: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        gouvernorat: {
            type: String,
            required: true,
        },
        capaciteInitiale: {
            type: String,
            required: true,
        },
        capaciteUtile: {
            type: String,
            required: true,
        },
        coursEau: {
            type: String,
            required: true,
        },
        dateDebutTravaux: {
            type: String,
        },
        dateMiseService: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("barrage", barrage);

export default model;