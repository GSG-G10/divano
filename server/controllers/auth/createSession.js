const { sign } = require('jsonwebtoken');
require('env2')('.env');

module.exports = (email, id) => {
  const payload = { email, id };
  return sign(payload, process.env.SECRET_KEY);
};
