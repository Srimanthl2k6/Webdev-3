const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

// ==========================================
// 1. APPLICATION PROPERTIES (app.locals)
// ==========================================
// app.locals are variables accessible throughout the application
app.locals.siteTitle = "University Student Portal";
app.locals.semester = "Fall 2025";
app.locals.adminEmail = "admin@university.edu";

console.log(`Starting ${app.locals.siteTitle}...`);

// ==========================================
// 2. MIDDLEWARE CONFIGURATION
// ==========================================
// Parses incoming JSON requests (Content-Type: application/json)
app.use(express.json());

// Parses incoming URL-encoded form data (Content-Type: application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Parses incoming text payloads (Content-Type: text/plain)
app.use(express.text());

// Parses incoming raw/binary data (Content-Type: application/octet-stream)
app.use(express.raw({ type: 'application/octet-stream', limit: '10mb' }));

// ==========================================
// 3. STATIC FILES
// ==========================================
// Serve static files (HTML, CSS, Images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// 4. ROUTING & MOUNTPATH DEMO
// ==========================================

// Mount the student router at '/api/students'
app.use('/api/students', studentRoutes);

// Demonstration of app.mountpath
// We create a mini sub-application to demonstrate this property specifically
const adminApp = express();
adminApp.get('/', (req, res) => {
    res.send('Admin Dashboard');
});

// Mount the admin sub-app
app.use('/admin', adminApp);

// app.mountpath returns the path pattern(s) where a sub-app is mounted
console.log(`Admin App is mounted at: ${adminApp.mountpath}`); // Outputs: '/admin'

// ==========================================
// 5. START SERVER
// ==========================================
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Student Routes available at http://localhost:${PORT}/api/students`);
});
