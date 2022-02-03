import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: "user",
    timestamps: true
  }
);
