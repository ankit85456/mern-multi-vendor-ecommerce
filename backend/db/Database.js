const mongoose = require("mongoose");

const connectDatabase = () => {
  const dbUrl = process.env.DB_URL;
  if (!dbUrl) {
    console.error("MongoDB connection string (DB_URL) is not defined in environment");
    process.exit(1);
  }

  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message || err);
      // exit the process so that unhandledRejection handler does not swallow
      process.exit(1);
    });
};

module.exports = connectDatabase;
