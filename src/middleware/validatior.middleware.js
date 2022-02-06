export const validatorMiddleware = (validator) => {
  return async (req, res, next) => {
    try {
      const validated = await validator.validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      if (err.isJoi) {
        res.status(422).json({ msg: err.details[0].message });
      } else next(err);
    }
  };
};
