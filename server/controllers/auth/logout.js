const logout = (req, res) => {
  res.clearCookie('token', 'userInfo')
    .json({ message: 'logged out succefully' });
};

module.exports = logout;
