const logout = (req, res) => {
  res.clearCookie('token', 'username')
    .json({ message: 'logged out succefully' });
};

module.exports = logout;
