const joi = require('joi');

const signUpSchema = joi.object({
  username: joi.string().min(3).max(100).required(),
  password: joi.string().alphanum().min(8).required(),
  confirmPassword: joi.ref('password'),
  email: joi.string().email().required(),
});

module.exports = signUpSchema;
