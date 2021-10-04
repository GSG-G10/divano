const router = require('express').Router();
const { login } = require('../controllers');
const { logout } = require('../controllers');

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;
