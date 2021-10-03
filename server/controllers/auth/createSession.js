const { sign } = require('jsonwebtoken');
require('env2')('.env');

module.exports = (email) => {
  const payload = { email };
  return sign(payload, process.env.SECRET_KEY);
};
