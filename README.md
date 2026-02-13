Student Portal Express ApplicationThis application demonstrates the core features of Express.js including various middleware parsers, routing, and static file serving.PrerequisitesNode.js installed on your machine.How to RunCreate Project Folder:Create a new folder (e.g., student-portal) and save the generated files inside it maintaining this structure:student-portal/
├── package.json
├── server.js
├── routes/
│   └── studentRoutes.js
└── public/
    └── index.html
Install Dependencies:Open your terminal in this folder and run:npm install
Start the Server:Run the command:npm start
View the App:Open your browser and navigate to http://localhost:3000.Features DemonstratedServer Creation: Basic express() app listening on port 3000.Middleware:express.json(): Used for the JSON Student Add feature.express.urlencoded(): Used for the HTML Form Student Add feature.express.text(): Used for the Feedback feature.express.raw(): Used for the Raw Upload feature.Routing: express.Router() is used in routes/studentRoutes.js.Static Files: express.static() serves the public/index.html.App Properties:app.locals: Stores site title and admin email.app.mountpath: Demonstrated by mounting a dummy adminApp.
