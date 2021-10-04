const logout = (req, res) => {
  res.clearCookie('token', 'username')
    .json({ msg: 'logged out succefully' });
};

module.exports = logout;
