const { comparePasswords, createSession } = require('./index');
const { getUserQuery } = require('../../database/queries');
const { loginSchema } = require('../../utils/validations');

const login = (req, res, next) => {
  const { password, email } = req.body;
  loginSchema.validateAsync(req.body)
    .then(() => {
      getUserQuery(email)
        .then((row) => {
          // check if username exists
          if (!row) {
            res.status(401).json({ message: 'invalid email or password' });
          } else {
            // check password
            comparePasswords(password, row.password, (err, data) => {
              if (err) next(err);
              else if (data) { // send cookies and response
                res.clearCookies('token', 'userInfo');
                res.cookie('username', row.useername);
                res.cookie('token', createSession(email, row.id), { httpOnly: true, secure: true });
                res.json({ message: 'logged in successfully' });
              } else res.status(401).json({ message: 'invalid email or password' });
            });
          }
        }).catch((err) => next(err));
    }).catch((err) => {
      res.status(422).json({ message: err.message });
    });
};

module.exports = login;
