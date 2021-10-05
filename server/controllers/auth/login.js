/* eslint-disable no-throw-literal */
const bcrypt = require('bcryptjs');
const { getUserQuery } = require('../../database/queries');
const { loginSchema } = require('../../utils/validations');

const login = async (req, res, next) => {
  // eslint-disable-next-line global-require
  const { createSession } = require('./index'); // there is a problem with requiring this function
  try {
    const { password, email } = req.body;
    await loginSchema.validateAsync(req.body).catch((error) => {
      throw { message: error.details[0].message, status: 400 };
    });
    const { rows } = await getUserQuery(email, '');
    if (!rows.length) {
      throw { message: 'invalid email or password', status: 401 };
    }
    const compared = await bcrypt.compare(password, rows[0].password);
    if (!compared) {
      throw { message: 'invalid email or password', status: 401 };
    }
    const token = await createSession(email, rows[0].id);
    res.cookie('token', token);
    res.cookie('username', rows[0].username);
    return res.json({ message: 'logged in successfully' });
  } catch (err) {
    return next(err);
  }
};

module.exports = login;
