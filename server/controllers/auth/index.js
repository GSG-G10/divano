const createSession = require('./createSession');
const login = require('./login');
const logout = require('./logout');
const {signUp} = require('./signup');

module.exports = {
  createSession,
  login,
  logout,
  signUp,
};
