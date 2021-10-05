const signUpSchema = require('../utils/validations/signUpSchema');

module.exports = (req, res, next) => {
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
    res.status(422).json({
      msg: error.details[0].message,
      status: 422,
    });
  } else {
    next();
  }
};
