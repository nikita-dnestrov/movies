import jwt from 'jsonwebtoken';
import { config } from '../config';

export const signJwt = (data) => {
  return jwt.sign(data, config.SECRET);
};
