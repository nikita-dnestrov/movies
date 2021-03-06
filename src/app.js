import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './db.js';
import AppRouter from './router/index.js';
import { errorHandler } from './middleware/errorHandler.js';

export const app = express();

sequelize.sync().then(() => console.log('db connected'));

app.use(bodyParser.json());

AppRouter.use(errorHandler);

app.use('/api/v1', AppRouter);
