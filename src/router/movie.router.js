import { Router } from "express";
import { movieController } from "../controllers/index.js";
import { fileHandler } from "../middleware/multer.middleware.js";
import { authHandler } from "../middleware/auth.middleware.js";

export const MovieRouter = Router();

MovieRouter.use(authHandler);

MovieRouter.get("/:id", movieController.getById);
MovieRouter.get("/", movieController.getAll);
MovieRouter.patch("/:id", movieController.update);
MovieRouter.delete("/:id", movieController.remove);
MovieRouter.post("/", movieController.create);
MovieRouter.post("/import", fileHandler().single("file"), movieController.parse);
