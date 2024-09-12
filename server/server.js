const express = require('express');
const path = require('path'); // Import path module to handle static directory correctly

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client'))); // Ensures correct path

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use HTML routes for serving HTML files
require('./routes/htmlRoutes')(app);

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server and listen on the defined PORT
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
