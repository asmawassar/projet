import express from "express";
import { getUser, logIn, signUp } from "../controllers/User.js";

const router = express.Router();

router.get("/get", getUser);

router.post("/signup", signUp);

router.post("/login", logIn);

export default router;
