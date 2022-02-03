import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  storage: 'database.sqlite',
});
