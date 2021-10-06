const { join } = require('path');
require('env2')('.env');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();

app.set('PORT', process.env.PORT || 4000);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});
app.use('/api/v1', router);

module.exports = app;
