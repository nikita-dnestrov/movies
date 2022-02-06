import joi from 'joi';

export const movieValidator = joi.object({
  title: joi.string().min(1).max(30).trim().required(),
  year: joi.number().min(1850).max(2022).required(),
  format: joi.string().valid('VHS', 'DVD', 'Blue-Ray').required(),
  actors: joi.array().required(),
});
