const express = require("express");
const authController = require('../controllers/auth.controller');
const router = express.Router();
router.get("/signup", authController.getSingup);
router.get("/login", authController.getLogin);

router.post("/signup", authController.signup);
router.post('/login',authController.login);
module.exports = router;
