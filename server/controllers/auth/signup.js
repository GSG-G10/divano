const { hash } = require('bcryptjs');
const { addUserQuery, getUserQuery } = require('../../database/queries');

const signUp = async (req, res, next) => {
  // eslint-disable-next-line global-require
  const { createSession } = require('./index');
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await hash(password, 10);
    const userData = await getUserQuery(email, username);
    if (userData.rows.length) {
      return res.status(409).json({ message: 'email or username is already in use' });
    }

    const newUserData = await addUserQuery(username, email, hashedPassword);
    const userId = newUserData.rows[0].id;
    const token = await createSession(email, userId);
    res.cookie('token', token);
    res.cookie('username', username);
    return res.status(201).json({ message: 'Signed up successfuly' });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp,
};
