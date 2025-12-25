const db = require('./db');

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

    // Create index on email column for faster login queries
    db.run(`
        CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    `);

    db.run(`
        INSERT OR IGNORE INTO users (email, password, role) VALUES
        ('helpdesk@dorm.edu', 'password', 'helpdesk'),
        ('admin@dorm.edu', 'password', 'admin'),
        ('resident@dorm.edu', 'password', 'resident')
    `);

    console.log('Database initialization complete.');
});