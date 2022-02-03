import { Router } from 'express';
import { userController } from '../controllers';

export const SessionRouter = Router();

SessionRouter.post('/', userController.signin);
