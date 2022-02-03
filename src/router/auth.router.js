import { Router } from 'express';
import { userController } from '../controllers';

export const UserRouter = Router();

UserRouter.post('/', userController.signup);
