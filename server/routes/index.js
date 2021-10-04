const router = require('express').Router();

const { logout, login, productDetails } = require('../controllers');
const { error404, serverError } = require('../controllers/errors');

router.post('/login', login);

router.get('/product/:id', productDetails);
router.get('/logout', logout);

router.use(error404);
router.use(serverError);

module.exports = router;
