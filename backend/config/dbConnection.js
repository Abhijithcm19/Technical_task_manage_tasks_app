const mongoose = require("mongoose");
const logger = require("../utils/logger");


const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(
      `Database connected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (err) {
    logger.error("Failed to connect to the database:", err.stack);
    process.exit(1);
  }
};

module.exports = connectDb;