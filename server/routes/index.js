const router = require('express').Router();

const { login } = require('../controllers');
const { logout } = require('../controllers');
const { error404, serverError } = require('../controllers/errors');

router.post('/login', login);

router.get('/logout', logout);

router.use(error404);
router.use(serverError);

module.exports = router;
