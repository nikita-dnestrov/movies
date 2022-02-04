import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./db.js";
import AppRouter from "./router/index.js";

export const app = express();

sequelize.sync().then(() => console.log("db connected"));

app.use(bodyParser.json());

app.use("/api/v1", AppRouter);
