const router = require('express').Router();
const logout = require('../controllers');

router.get('/logout', logout);

module.exports = router;
