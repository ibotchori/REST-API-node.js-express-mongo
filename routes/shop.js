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

/* DELETE A SPECIFIC POST */
router.delete("/:shopId", async (req, res) => {
    try {
      // delete specific data form server by ID
      const removeShop = await Shop.remove({ _id: req.params.shopId });
      // see removed data on response
      res.json(removeShop);
    } catch (error) {
      // see error on response
      res.json({ message: error });
    }
  });

module.exports = router
