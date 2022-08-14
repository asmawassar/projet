import express from "express";
import { getUsers, getUser, logIn, signUp } from "../controllers/User.js";

const router = express.Router();

router.get("/getUsers", getUsers);

router.get("/getUser", getUser);

router.post("/signup", signUp);

router.post("/login", logIn);

export default router;
