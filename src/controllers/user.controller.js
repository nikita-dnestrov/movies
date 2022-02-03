import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userService } from '../services';
import { config } from '../config';

class UserController {
  async signup(req, res, next) {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);

      const user = await userService.create({ ...req.body, password: hash });
      res.status(200).json({ user });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async signin(req, res, next) {
    try {
      const { email, password } = req.body;

      const data = await userService.findByParams({ email });

      bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
          res.status(200).json({ token: jwt.sign(data, config.SECRET), status: 1 });
        } else {
          throw new Error('Wrong password');
        }
      });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

export const userController = new UserController();
