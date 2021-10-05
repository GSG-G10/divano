const fs = require('fs');
const path = require('path');
const connection = require('../connection');

const buildDB = () => {
  const filepath = path.join(__dirname, 'build.sql');
  let sql = fs.readFileSync(filepath).toString();
  sql += fs.readFileSync(path.join(__dirname, 'fakedata.sql')).toString();
  return connection.query(sql);
};

buildDB();

module.exports = buildDB;
