const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

// Import routes
const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");
const privateRoute = require("./routes/privateRoute");
const shopRoute = require("./routes/shop");
const skillsRoute = require("./routes/skills");

/* Middleware */
// body-parser, parse any requests (convert data to json)
app.use(bodyParser.json());
// Enable All CORS Requests
app.use(cors());

/* Route Middleware (Middleware for specific routes) */
// post middleware
app.use("/posts", postRoute); // <-- run postRoute on /post url
// auth middleware
app.use("/api/user", authRoute);
// private route middleware
app.use("/api/private", privateRoute);
// shop middleware
app.use("/shop", shopRoute);
// skills middleware
app.use("/skills", skillsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home page");
});

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connect to DB");
});

// Listening to the server
app.listen(4000);
