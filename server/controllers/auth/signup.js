const { hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { addUserQuery } = require('../../database/queries/users');

const signUp = (req, res) => {
  const { username, password, email } = req.body;
  //hash password 
  hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({
        msg: 'Internal Server Error',
        status: 500,
      });
    } else {
      // add user to the database
      addUserQuery({
        username,
        email,
        password: hashedPassword,
      })

        .then((data) => data.rows[0])
        .then((user) => {
          sign(
            {
              id: user.id,
              username: user.username,
              email: user.email,
            },
            process.env.SECRET,
            (errr, token) => {
              if (errr) {
                res.status(500).json({
                  msg: 'Internal Server Error',
                  status: 500,
                });
              } else {
                res.cookie('accessToken', token);
              }
            },
          );
        })
        .catch((er) => {
          if (er.code) {
            if (er.code === '23505') {
              res.status(422).json({
                msg: `${er.constraint.split('_')[1]} alerdy in use`,
                status: 422,
              });
            }
          } else {
            res.status(500).json({
              msg: er,
              status: 500,
            });
          }
        });
    }
  });
};

module.exports = {
  signUp,
};
