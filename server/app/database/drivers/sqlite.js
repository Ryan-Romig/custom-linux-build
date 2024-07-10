const sqlite3 = require('sqlite3').verbose();

class SqliteDriver {
  constructor(databasePath) {
    this.databasePath = databasePath;
  }

  connect() {
    this.db = new sqlite3.Database(this.databasePath, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the SQLite database.');
    });
  }

  disconnect() {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  }

  query(sql, params) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}