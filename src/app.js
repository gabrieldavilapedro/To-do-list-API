const express = require('express');
const tasksRouter = require('./routes/tasksRoutes');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_HOST
  }),
);

app.use(express.json());

app.use('/tasks', tasksRouter);

module.exports = app;
