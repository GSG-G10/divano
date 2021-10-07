const { sign } = require('jsonwebtoken');
require('env2')('.env');

module.exports = (email, id) => new Promise((resolve, reject) => {
  sign({ email, id }, process.env.SECRET_KEY, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});
