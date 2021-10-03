const logout = (req, res) => {
  res.clearCookie('token', 'username');
  res.redirect('/');
};

module.exports = logout;
