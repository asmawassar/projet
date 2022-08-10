import express from "express";
import {
  createIndicator,
  getIndicator,
  updateIndicator,
} from "../controllers/Indicators.js";

const router = express.Router();

router.get("/get", getIndicator);

router.post("/AddIndicator", createIndicator);

router.patch("/update", updateIndicator);

export default router;
