import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT || 8000,
  SECRET: process.env.SECRET || 'secret',
};
