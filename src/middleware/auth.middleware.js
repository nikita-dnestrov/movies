import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

export const authHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Error("Unauthorized");
  }

  const [bearer, token] = authorization.split(" ");

  try {
    const user = jwt.verify(token, config.SECRET);

    if (!user) {
      throw new Error("Unauthorized");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
