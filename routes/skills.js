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
    // extract data (Array of objects) from Mongo Database
    const skills = await Skills.find();

    // extract only 2 property from objects
    const newArr = skills.map((item) => {
      let filteredObject = {
        id: item.id,
        title: item.title,
      };
      return filteredObject;
    });

    // see data on response
    res.json(newArr);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

/* Submit A Skill */
router.post("/", async (req, res) => {
  // prepare data
  const skill = new Skills({
    id: req.body.id,
    title: req.body.title,
  });
  try {
    // save prepared data to database
    const savedSkills = await skill.save();
    // see saved data on response
    res.json(savedSkills);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

module.exports = router;
