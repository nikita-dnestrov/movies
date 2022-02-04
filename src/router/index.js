import { Router } from "express";
import { UserRouter } from "./auth.router.js";
import { MovieRouter } from "./movie.router.js";
import { SessionRouter } from "./session.router.js";

const AppRouter = Router();

AppRouter.use("/users", UserRouter);
AppRouter.use("/sessions", SessionRouter);
AppRouter.use("/movies", MovieRouter);

export default AppRouter;
