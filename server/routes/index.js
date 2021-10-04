const router = require('express').Router();
const { logout } = require('../controllers');
const { error404, serverError } = require('../controllers/errors');

router.get('/logout', logout);

router.use(error404);
router.use(serverError);

module.exports = router;
