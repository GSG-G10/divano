const { loginSchema } = require('../utils/validations');
// login input Validation
const loginValidation = (req, res, next) => {
  loginSchema.validateAsync(req.body)
    .then(() => {
      next();
    }).catch((err) => {
      res.json({ message: err.message });
    });
};

module.exports = loginValidation;
