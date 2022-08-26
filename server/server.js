import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connection from "./db.js";

import routeUser from "./routes/Users.js";
import routeBarrage from "./routes/Indicateur.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", routeUser);
app.use("/barrage", routeBarrage);

connection();

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port: ${port}`));
