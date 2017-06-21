var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'chenhowa',
  password        : 'apples',
  database        : 'your_name'
});

module.exports.pool = pool;
