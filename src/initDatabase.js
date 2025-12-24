const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to SQLite database file
const dbPath = path.resolve(__dirname, '../database.sqlite');
const db = new sqlite3.Database(dbPath);

// Create Users table and insert test data
db.serialize(() => {
    console.log('Initializing database...');

    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL CHECK (role IN ('resident', 'helpdesk', 'admin'))
        )
    `);

    db.run(`
        INSERT OR IGNORE INTO users (email, password, role) VALUES
        ('helpdesk@dorm.edu', 'password', 'helpdesk'),
        ('admin@dorm.edu', 'password', 'admin'),
        ('resident@dorm.edu', 'password', 'resident')
    `);

    console.log('Database initialization complete.');
});

// Close the database connection
db.close();