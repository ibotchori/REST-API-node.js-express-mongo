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
  const emailExist = await User.findOne({ email: req.body.email });
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
    // see saved user ID on response
    res.send({ userId: user._id });
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

/* Login */
router.post("/login", async (req, res) => {
  // Validate data with Joi, before create User
  const { error } = loginValidation(req.body);
  // in error case stop code execution and see error on response
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check, if the user is already in the database
  const user = await User.findOne({ email: req.body.email });
  // if email does not exists sent the message
  if (!user) return res.status(400).send("Email is not found");

  // compare entered password to password from database
  const validPass = await bcrypt.compare(req.body.password, user.password);
  // if password is invalid send the message on response
  if (!validPass) return res.status(400).send("Invalid password");

  // if everything is ok, send the message
  res.send("Logged in");
});

module.exports = router;
