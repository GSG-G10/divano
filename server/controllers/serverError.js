const error500 = (err, req, res, next) => {
  res.status(500)
    .json({ message: 'Internal server error!' });
};

module.exports = error500;
