// Import the sqlite3 module. The `verbose` method gives more detailed stack trace.
var sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database.
let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample database.');
});

// Write to the database.
db.run(`INSERT INTO tablename(column1, column2) VALUES(?,?)`, ['value1', 'value2'], function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// Close the database connection.
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});