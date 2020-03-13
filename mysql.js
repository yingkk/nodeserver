var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: '123456',
  database: 'test'
})

connection.connect()

connection.query('SELECT * from user', function (err, rows, fields) {
  if (err) throw err
  console.log('The user is: ', rows[0].solution)
})

connection.end()