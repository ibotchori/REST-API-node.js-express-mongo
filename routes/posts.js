/* Own routes in separate file */
const express = require("express");
const router = express.Router();

// import Post model to save data to database
const Post = require("../models/Post");

/* Get data from the server */
router.get("/", async (req, res) => {
  try {
      // get all post from server
      const posts = await Post.find()
      // see data on response
      res.json(posts);
  } catch (error) {
       // see error on response
    res.json({ message: error });
  }
});

/* Post data to the server */
// async/await
router.post("/", async (req, res) => {
  // prepare data
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    // save prepared data
    const savedPost = await post.save();
    // see saved data on response
    res.json(savedPost);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

// then/catch

// router.post("/", (req, res) => {
//   // prepare data
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });
//   // save prepared data
//   post
//     .save()
//     // see saved data on response
//     .then((data) => {
//       res.json(data);
//     })
//     // see error on response
//     .catch((err) => {
//       res.json({ message: err });
//     });
// });

module.exports = router;
