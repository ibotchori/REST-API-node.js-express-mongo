const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Import routes
const postRoute = require("./routes/posts");

// Middleware for specific routes
app.use("/posts", postRoute); // <-- run postRoute on /post url

// Routes
app.get("/", (req, res) => {
  res.send("We are on home page");
});

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connect to DB");
});

// Listening to the server
app.listen(3000);
