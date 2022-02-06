import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export const authHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ message: 'Authorization token is required' });
  }

  const [bearer, token] = authorization.split(' ');

  try {
    const user = jwt.verify(token, config.SECRET);

    if (!authorization) {
      res.status(401).json({ message: 'Authorization token is not valid' });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
