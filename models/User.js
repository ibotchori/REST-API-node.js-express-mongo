/* User model for save data to database */
const mongoose = require("mongoose");

// Create schema (describe the way your data looks)
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export UserSchema model and give it the name 'User'
module.exports = mongoose.model("User", UserSchema);
