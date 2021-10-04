const { comparePasswords, createSession } = require('./index');
const { getUserQuery } = require('../../database/queries');

const login = (req, res) => {
  const { password, email } = req.body;
  getUserQuery(email)
    .then((row) => {
      // check if username exists
      if (!row) {
        res.status(401).json({ message: 'invalid email or password' });
      } else {
        // check password
        comparePasswords(password, row.password, (err, data) => {
          if (err) {
            res.status(500).json({ message: 'Internal Server Error' });
          } else if (data) {
            res.clearCookies('token', 'userInfo');
            res.cookie('userInfo', { username: row.username, id: row.id });
            res.cookie('token', createSession(email), { httpOnly: true, secure: true });
            // this line needs to send response
          } else res.status(401).json({ message: 'invalid email or password' });
        });
      }
    }).catch(() => {
      res.status(500).json({ message: 'Internal Server Error' });
    });
};

module.exports = login;
