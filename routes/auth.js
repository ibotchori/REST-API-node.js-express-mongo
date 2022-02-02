/* Own routes in separate file */
const express = require("express");
const router = express.Router();

// import User model to save data to database
const User = require("../models/User");

/* Register new user */
router.post("/register", async (req, res) => {
  // prepare data
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    // save prepared data
    const saveUser = await user.save();
    // see saved data on response
    res.json(saveUser);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

module.exports = router;
