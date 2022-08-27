import express from "express";
import {
  editIndicator,
  getIndicators,
  updateIndicator,
} from "../controllers/Indicateur.js";
import { createBarrage } from "../controllers/barrage.js";

const router = express.Router();

router.post("/create", createBarrage);

router.get("/get", getIndicators);

router.put("/update", updateIndicator);

router.put("/edit", editIndicator);

export default router;
