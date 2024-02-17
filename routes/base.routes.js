const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
  // res.render("home");
  res.status(200).json({message:'Welcome to the HSA',pageTitle:'Home',content:'Would you like to signup'});
});

module.exports=router;
