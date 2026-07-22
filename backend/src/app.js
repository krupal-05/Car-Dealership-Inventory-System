const express = require('express');
const cors = require('cors');

const app = express();

// Core Middlewares
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Car Dealership Inventory API is running healthy',
  });
});

module.exports = app;
