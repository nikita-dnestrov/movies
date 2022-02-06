import { Router } from 'express';
import { userController } from '../controllers/index.js';
import { validatorMiddleware } from '../middleware/validatior.middleware.js';
import { userSigninValidator } from '../validators/user.validator.js';

export const SessionRouter = Router();

SessionRouter.post('/', validatorMiddleware(userSigninValidator), userController.signin);
