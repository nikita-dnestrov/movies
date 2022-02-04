import { Router } from "express";
import { userController } from "../controllers/index.js";

export const UserRouter = Router();

UserRouter.post("/", userController.signup);
