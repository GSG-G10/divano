const { hash } = require('bcryptjs');
const { createSession } = require('./index');
const { addUserQuery, getUserQuery } = require('../../database/queries');

const signUp = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await hash(password, 10);
    const userData = await getUserQuery(email);
    if (userData.length) {
      return res.status(409).json({ message: 'email is already in use' });
    }

    const newUserData = await addUserQuery(username, email, hashedPassword);
    const userId = newUserData[0].id;

    const token = await createSession(email, userId);
    res.cookie('token', token);
    res.cookie('username', username);
    return res.status(201).json({ message: 'Sign up successfuly' });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp,
};
