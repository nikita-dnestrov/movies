import { Router } from 'express';
import { userController } from '../controllers/index.js';
import { validatorMiddleware } from '../middleware/validatior.middleware.js';
import { userSignupValidator } from '../validators/user.validator.js';

export const UserRouter = Router();

UserRouter.post('/', validatorMiddleware(userSignupValidator), userController.signup);
