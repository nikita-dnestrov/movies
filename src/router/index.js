import { Router } from 'express';
import { UserRouter } from './auth.router';
import { MovieRouter } from './movie.router';
import { SessionRouter } from './session.router';

const AppRouter = Router();

AppRouter.use('/users', UserRouter);
AppRouter.use('/sessions', SessionRouter);
AppRouter.use('/movies', MovieRouter);

export default AppRouter;
