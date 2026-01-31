const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

// Debug: check if Routes folder and taskRoutes.js exist
try {
  console.log("Files in Routes folder:", fs.readdirSync("./Routes"));
  if (!fs.existsSync("./Routes/taskRoutes.js")) {
    throw new Error("./Routes/taskRoutes.js not found!");
  }
} catch (err) {
  console.error("Routes folder check failed:", err.message);
  process.exit(1); // stop server if routes not found
}

// Require routes
const taskRoutes = require("./Routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
