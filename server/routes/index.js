const router = require('express').Router();
const { logout, serverError } = require('../controllers');

router.get('/logout', logout);

router.use(serverError);

module.exports = router;
