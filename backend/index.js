const express = require('express');
const logger = require('./utils/logger.js'); 
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const authRouter = require('./routes/authRouter');
const cors = require('cors');

connectDb(); // Connecting to the database
const app = express();

app.use(cors());
app.use(express.json())
app.use('/api.tasktrack.com/auth', authRouter);
app.use(errorHandler);

// Middleware to log incoming requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});