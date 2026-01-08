const express = require('express');

const app = express();

app.use(express.json());

// Fallbacks to handle unknown routes and errors without exposing internals.
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;
