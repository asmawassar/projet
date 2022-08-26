import express from "express";
import {
  createIndicator,
  editIndicator,
  getIndicators,
  updateIndicator,
} from "../controllers/Indicateur.js";

const router = express.Router();

router.get("/get", getIndicators);

router.post("/create", createIndicator);

router.put("/update", updateIndicator);

router.put("/edit", editIndicator);


export default router;
