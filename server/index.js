const app = require('./app');

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port http://localhost:4000');
});
