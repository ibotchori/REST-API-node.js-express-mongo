const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

// Middleware
// body-parser, parse any requests (convert data to json)
app.use(bodyParser.json());
// Enable All CORS Requests
app.use(cors());

// Import routes
const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");

/* Route Middleware (Middleware for specific routes) */
// post middleware
app.use("/posts", postRoute); // <-- run postRoute on /post url

// auth middleware
app.use("/api/user", authRoute);

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
