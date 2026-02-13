```markdown
# Student Portal Express Application

This application demonstrates the core features of **Express.js**, including middleware parsers, routing, and static file serving.

---

## 📋 Prerequisites
- Node.js installed on your machine

---

## 🚀 How to Run

### 1. Create Project Folder
Create a new folder (e.g., `student-portal`) and maintain the following structure:

```
student-portal/
├── package.json
├── server.js
├── routes/
│   └── studentRoutes.js
└── public/
    └── index.html
```

### 2. Install Dependencies
Open your terminal in this folder and run:
```bash
npm install
```

### 3. Start the Server
```bash
npm start
```

### 4. View the App
Open your browser and navigate to:
```
http://localhost:3000
```

---

## ✨ Features Demonstrated

### 🔹 Server Creation
- Basic `express()` app listening on port **3000**

### 🔹 Middleware
- `express.json()` → JSON Student Add feature  
- `express.urlencoded()` → HTML Form Student Add feature  
- `express.text()` → Feedback feature  
- `express.raw()` → Raw Upload feature  

### 🔹 Routing
- `express.Router()` used in `routes/studentRoutes.js`

### 🔹 Static Files
- `express.static()` serves `public/index.html`

### 🔹 App Properties
- `app.locals` → Stores site title and admin email  
- `app.mountpath` → Demonstrated by mounting a dummy `adminApp`

---
```
