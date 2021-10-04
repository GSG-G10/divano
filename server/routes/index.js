const router = require('express').Router();
const { logout, serverError, productDetails } = require('../controllers');

router.get('/productDetails', productDetails);
router.get('/logout', logout);

router.use(serverError);

module.exports = router;
