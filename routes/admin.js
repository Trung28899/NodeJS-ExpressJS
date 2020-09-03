const express = require("express");
const path = require("path");

const router = express.Router();

// Actually get to /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// Actually get to /admin/product
router.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
