const bcrypt = require('bcryptjs');
const { createSession } = require('./index');
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
            bcrypt.compare(password, row.password).then((data) => {
              if (data) { // send cookies and response
                res.cookie('username', row.useername);
                createSession(email, row.id)
                  .then((token) => {
                    res.cookie('token', token, { httpOnly: true, secure: true });
                    res.json({ message: 'logged in successfully' });
                  });
              } else res.status(401).json({ message: 'invalid email or password' });
            })
              .catch((err) => next(err));
          }
        }).catch((err) => next(err));
    }).catch((err) => {
      res.status(422).json({ message: err.message });
    });
};

module.exports = login;
