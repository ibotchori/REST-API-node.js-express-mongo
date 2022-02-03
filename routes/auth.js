/* Own routes in separate file */
const express = require("express");
const router = express.Router();

// import User model to save data to database
const User = require("../models/User");

// VALIDATION with Joi
const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

/* Register new user */
router.post("/register", async (req, res) => {
  // Validate data with Joi, before create User
  const { error } = schema.validate(req.body);
  // in error case stop code execution and see error on response
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // prepare data
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    // save prepared data to mongo database
    const saveUser = await user.save();
    // see saved data on response
    res.json(saveUser);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

module.exports = router;
