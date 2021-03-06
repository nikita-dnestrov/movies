import { User } from "../models/index.js";

class UserService {
  async findByParams(params) {
    return await User.findOne({ where: params, raw: true });
  }

  async create(data) {
    return await User.create(data);
  }
}

export const userService = new UserService();
