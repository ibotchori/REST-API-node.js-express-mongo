/* Post model for save data to database */
const mongoose = require("mongoose");

// Create schema (describe the way your data looks)
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export PostSchema model and give it the name 'Posts'
module.exports = mongoose.model("Posts", PostSchema);
