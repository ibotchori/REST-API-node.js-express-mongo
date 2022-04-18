/* Skillsmodel for save data to database */
const mongoose = require("mongoose");

// Create schema (describe the way your data looks)
const SkillsSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// Export SkillsSchema model and give it the name 'Skills'
module.exports = mongoose.model("Skills", SkillsSchema);
