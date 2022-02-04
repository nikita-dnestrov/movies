import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    format: {
      type: DataTypes.STRING
    },
    actors: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: "movie",
    timestamps: true
  }
);
