const express = require('express');
const router = express.Router();

// In-memory data store for demonstration
let students = [
    { id: 1, name: "Alice Johnson", major: "Computer Science" },
    { id: 2, name: "Bob Smith", major: "Mathematics" }
];

// Middleware specific to this router (optional logging)
router.use((req, res, next) => {
    console.log(`[Student Router] ${req.method} request to ${req.originalUrl} at ${new Date().toISOString()}`);
    next();
});

// 1. GET / - Return all students
router.get('/', (req, res) => {
    // We can access global app variables via req.app.locals
    const title = req.app.locals.siteTitle;
    
    res.json({
        portal: title,
        count: students.length,
        data: students
    });
});

// 2. POST / - Add student using JSON
// Expects header: Content-Type: application/json
router.post('/', (req, res) => {
    const newStudent = req.body;
    
    if (!newStudent.name || !newStudent.major) {
        return res.status(400).json({ error: "Name and Major are required" });
    }

    newStudent.id = students.length + 1;
    students.push(newStudent);

    console.log("Student added via JSON:", newStudent);
    res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// 3. POST /form - Accept standard HTML form data
// Expects header: Content-Type: application/x-www-form-urlencoded
router.post('/form', (req, res) => {
    // req.body will be a standard object due to express.urlencoded()
    const { name, major } = req.body;
    
    const newStudent = {
        id: students.length + 1,
        name: name,
        major: major,
        source: "HTML Form"
    };
    
    students.push(newStudent);
    console.log("Student added via URL Encoded Form:", newStudent);
    
    // Redirect back to home page or send simple confirmation
    res.send(`<h1>Student Added!</h1><p>Name: ${name}</p><p>Major: ${major}</p><a href="/">Go Back</a>`);
});

// 4. POST /feedback - Accept plain text
// Expects header: Content-Type: text/plain
router.post('/feedback', (req, res) => {
    // req.body is a string due to express.text()
    const feedback = req.body;
    console.log("Feedback received:", feedback);
    res.send(`Feedback received: "${feedback}"`);
});

// 5. POST /upload - Accept raw data
// Expects header: Content-Type: application/octet-stream
router.post('/upload', (req, res) => {
    // req.body is a Buffer due to express.raw()
    const rawData = req.body;
    
    if (Buffer.isBuffer(rawData)) {
        console.log(`Received raw data of size: ${rawData.length} bytes`);
        res.send(`Upload successful. Received ${rawData.length} bytes of raw data.`);
    } else {
        res.status(400).send("No raw data received");
    }
});

module.exports = router;
