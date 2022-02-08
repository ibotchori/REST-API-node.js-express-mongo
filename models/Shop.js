/* Post model for save data to database */
const mongoose = require("mongoose");

// Create schema (describe the way your data looks)
const ShopSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// Export ShopSchema model and give it the name 'Posts'
module.exports = mongoose.model("Shop", ShopSchema);
