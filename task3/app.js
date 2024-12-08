// index.js
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoute');
const errorMiddleware = require('./middleware/errorMiddleware.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);

// Error middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});