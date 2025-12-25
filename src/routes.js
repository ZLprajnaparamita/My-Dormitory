const express = require('express');
const path = require('path');
const db = require('./db'); // SQLite database connection
const router = express.Router();

// Middleware to check authentication
function requireAuth(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect('/login');
    }
    next();
}

// Middleware to check role
function requireRole(role) {
    return (req, res, next) => {
        if (!req.session || !req.session.user || req.session.user.role !== role) {
            return res.redirect('/login');
        }
        next();
    };
}

// Default Homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Login Page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Handle Login Submission
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Use SQLite's db.get to fetch data based on email
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.get(sql, [username], (err, user) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        // No matching email
        if (!user) {
            res.send('Invalid credentials!');
            return;
        }

        // Check if the password matches
        if (user.password !== password) {
            res.send('Invalid credentials!');
            return;
        }

        // Redirect based on role
        req.session.user = { email: user.email, role: user.role };
        switch (user.role) {
            case 'helpdesk':
                res.redirect('/helpdesk');
                break;
            case 'admin':
                res.redirect('/admin');
                break;
            case 'resident':
                res.redirect('/resident-info');
                break;
            default:
                res.status(500).send('Invalid role!');
        }
    });
});

// Resident Info Page
router.get('/resident-info', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/resident_info.html'));
});

// Helpdesk Dashboard (protected route)
router.get('/helpdesk', requireRole('helpdesk'), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/helpdesk.html'));
});

// Admin Dashboard (protected route)
router.get('/admin', requireRole('admin'), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
});

// Logout API endpoint
router.post('/api/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Logout failed.' });
            }
            res.clearCookie('connect.sid'); // Clear session cookie
            return res.status(200).json({ message: 'Logged out successfully.' });
        });
    } else {
        return res.status(200).json({ message: 'No active session found.' });
    }
});

module.exports = router;