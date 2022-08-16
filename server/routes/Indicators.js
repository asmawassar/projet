import express from "express";
import {
  createBarrage,
  getIndicator,
  updateIndicator,
} from "../controllers/Indicators.js";

const router = express.Router();

router.get("/get", getIndicator);

router.post("/AddBarrage", createBarrage);

router.put("/update", updateIndicator);

export default router;
