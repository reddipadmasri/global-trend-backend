require('dotenv').config();
const mongoose = require('mongoose');

console.log("Testing MongoDB connection...");
console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)  // remove options
.then(() => {
  console.log("✅ MongoDB connected successfully!");
  process.exit(0);
})
.catch(err => {
  console.error("❌ Connection failed:");
  console.error(err);
  process.exit(1);
});
