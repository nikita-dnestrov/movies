import { Router } from 'express';
import { movieController } from '../controllers';
import { fileHandler } from '../middleware/multer.middleware';
import { authHandler } from '../middleware/auth.middleware';

export const MovieRouter = Router();

MovieRouter.use(authHandler);

MovieRouter.get('/:id', movieController.getById);
MovieRouter.get('/', movieController.getAll);
MovieRouter.patch('/:id', movieController.update);
MovieRouter.delete('/:id', movieController.remove);
MovieRouter.post('/', movieController.create);
MovieRouter.post('/import', fileHandler().single('file'), movieController.parse);
