const sqlite3 = require('sqlite3');
const path = require('path');

// Connect to database file
const dbPath = path.resolve(__dirname, '../database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Failed to connect to the database:', err.message);
        process.exit(1); // Exit if database connection fails
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Enable WAL mode for better concurrent access
db.run('PRAGMA journal_mode = WAL;');

module.exports = db;