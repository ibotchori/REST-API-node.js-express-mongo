/* Own routes in separate file */
const express = require("express");
const router = express.Router();

// import Post model to save data to database
const Post = require("../models/Post");

/* GET BACK ALL THE POSTS */
router.get("/", async (req, res) => {
  try {
    // get all data from server
    const posts = await Post.find();
    // see data on response
    res.json(posts);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

/* SUBMIT A POST */
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

/* GET BACK A SPECIFIC POST */
router.get("/:postId", async (req, res) => {
  try {
    // get specific data form server by ID
    const post = await Post.findById(req.params.postId);
    // see specific data on response
    res.json(post);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

/* DELETE A SPECIFIC POST */
router.delete("/:postId", async (req, res) => {
    try {
      // delete specific data form server by ID
      const removedPost = await Post.remove({_id: req.params.postId});
      // see removed data on response
      res.json(removedPost);
    } catch (error) {
      // see error on response
      res.json({ message: error });
    }
  });

module.exports = router;
