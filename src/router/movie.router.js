import { Router } from 'express';
import { movieController } from '../controllers/index.js';
import { upload } from '../middleware/multer.middleware.js';
import { authHandler } from '../middleware/auth.middleware.js';
import { validatorMiddleware } from '../middleware/validatior.middleware.js';
import { movieValidator } from '../validators/movie.validator.js';

export const MovieRouter = Router();

MovieRouter.use(authHandler);

MovieRouter.get('/:id', movieController.getById);
MovieRouter.get('/', movieController.getAll);
MovieRouter.patch('/:id', movieController.update);
MovieRouter.delete('/:id', movieController.remove);
MovieRouter.post('/', validatorMiddleware(movieValidator), movieController.create);
MovieRouter.post('/import', upload.single('movies'), movieController.parse);
