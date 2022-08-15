import express from "express";
import { getUsers, logIn, signUp, updateUser } from "../controllers/User.js";

const router = express.Router();

router.get("/getUsers", getUsers);

router.post("/signup", signUp);

router.post("/login", logIn);

router.put("/updateUser", updateUser);

export default router;
