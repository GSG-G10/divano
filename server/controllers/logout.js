const logout = (req, res) => {
  res.clearCookie('token', 'username');
};

module.exports = logout;
