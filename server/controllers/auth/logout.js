const logout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('username')
    .json({ message: 'logged out succefully' });
};

module.exports = logout;
