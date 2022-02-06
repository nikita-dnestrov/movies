import joi from 'joi';

export const userSignupValidator = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().min(3).max(30).trim().required(),
  confirmPassword: joi
    .string()
    .equal(joi.ref('password'))
    .required()
    .messages({ 'any.only': 'Passwords does not match' }),
  name: joi.string().min(3).max(30).trim().required(),
});

export const userSigninValidator = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().min(3).max(30).trim().required(),
});
