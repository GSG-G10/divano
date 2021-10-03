const joi = require('joi');
// login input Validation
const loginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(6).required(),
  });
  schema.validateAsync(req.body)
    .then(() => {
      next();
    }).catch((err) => {
      res.json({ message: err.message });
    });
};

module.exports = loginValidation;
