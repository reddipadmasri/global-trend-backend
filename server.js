const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const routesPath = "./routes/taskRoutes";

// Debug: check if the routes folder and file exist
try {
  console.log("Files in routes folder:", fs.readdirSync("./routes"));
  if (!fs.existsSync(routesPath + ".js")) {
    throw new Error(`${routesPath}.js not found!`);
  }
} catch (err) {
  console.error("Routes folder check failed:", err.message);
}

const taskRoutes = require(routesPath);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
