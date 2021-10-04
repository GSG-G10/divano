const createSession = require('./createSession');
const login = require('./login');
const { hashPassword, comparePasswords } = require('./hashPassword');
const logout = require('./logout');

module.exports = {
  createSession,
  hashPassword,
  comparePasswords,
  login,
  logout,
};
