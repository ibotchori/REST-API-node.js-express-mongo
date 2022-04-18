/* Own routes in separate file */
const express = require("express");
const router = express.Router();

const Skills = require("../models/Skills");

// const skills = [
//   { id: 1, title: "HTML" },
//   { id: 2, title: "CSS" },
//   { id: 3, title: "PHP" },
//   { id: 4, title: "Laravel" },
//   { id: 5, title: "React.JS" },
//   { id: 6, title: "Vue.JS" },
//   { id: 7, title: "Svelte" },
//   { id: 8, title: "Angular" },
// ];

/* GET BACK ALL THE Skills */
router.get("/", async (req, res) => {
  try {
    // extract data from Mongo Database
    const skills = await Skills.find();

    // see data on response
    res.json(skills);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

module.exports = router;
