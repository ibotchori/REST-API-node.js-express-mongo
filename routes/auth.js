/* Own routes in separate file */
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

// import User model to save data to database
const User = require("../models/User");

// VALIDATION with Joi
const { registerValidation, loginValidation } = require("../validation");

/* Register new user */
router.post("/register", async (req, res) => {
  // Validate data with Joi, before create User
  const { error } = registerValidation(req.body);
  // in error case stop code execution and see error on response
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check, if the user is already in the database send the message
  emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Hash (encrypt) the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    // save user to database
    const saveUser = await user.save();
    // see saved user on response
    res.json(saveUser);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

module.exports = router;
