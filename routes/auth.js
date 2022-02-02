/* Own routes in separate file */
const express = require("express");
const router = express.Router();

// Post route
router.post("/register", (req, res) => {
  res.send("Register");
});

module.exports = router;
