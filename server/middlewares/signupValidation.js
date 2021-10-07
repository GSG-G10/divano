const signUpSchema = require('../utils/validations/signUpSchema');

const signUpValidation = (req, res, next) => {
  const {
    username, password, confirmPassword, email,
  } = req.body;
  const { error } = signUpSchema.validate({
    username,
    password,
    confirmPassword,
    email,
  });

  if (error) {
    // validattion error
    res.status(400).json({
      message: error.details[0].message,
      status: 400,
    });
  } else {
    next();
  }
};

module.exports = signUpValidation;
