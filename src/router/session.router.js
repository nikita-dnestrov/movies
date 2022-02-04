import { Router } from "express";
import { userController } from "../controllers/index.js";

export const SessionRouter = Router();

SessionRouter.post("/", userController.signin);
