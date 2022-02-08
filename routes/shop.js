const router = require("express").Router()

// restrict access without token to this route
// import Post model to save data to database
const Shop = require("../models/Shop");

/* GET BACK ALL THE Shop */
router.get("/", async (req, res) => {
  try {
    // get all data from server
    const shop = await Shop.find();
    // see data on response
    res.json(shop);
  } catch (error) {
    // see error on response
    res.json({ message: error });
  }
});

/* SUBMIT A SHOP */
router.post("/", async (req, res) => {
    // prepare data
    const shop = new Shop({
      text: req.body.text,
    });
    try {
      // save prepared data
      const savedShop = await shop.save();
      // see saved data on response
      res.json(savedShop);
    } catch (error) {
      // see error on response
      res.json({ message: error });
    }
  });

/* DELETE A SPECIFIC SHOP */
router.delete("/:shopId", async (req, res) => {
    try {
      // delete specific data from server by ID
      const removeShop = await Shop.remove({ _id: req.params.shopId });
      // see removed data on response
      res.json(req.params.shopId);
    } catch (error) {
      // see error on response
      res.json({ message: error });
    }
  });

module.exports = router
