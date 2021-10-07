// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err.message) {
    console.log('error', err);
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500)
    .json({ message: 'Internal server error!' });
};

module.exports = serverError;
