const router = require('express').Router();
const signupValidation = require('../middlewares');

const { signUp } = require('../controllers/auth/signup');

router.post('/signup', signupValidation, signUp);

module.exports = router;
