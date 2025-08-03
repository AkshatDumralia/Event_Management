const sqlite3 = require('sqlite3').verbose();

// Create or open the database
const db = new sqlite3.Database('./data.db', (err) => {
  if (err) {
    console.error('Database opening error:', err);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create a sample table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )`);
});

module.exports = db;
