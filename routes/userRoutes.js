const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  currentUser,
} = require("../controllers/userControllers");

const { isAuthenticated } = require("../middlewares/auth");

router.post("/user",isAuthenticated,currentUser);
router.post("/register", register);
router.post("/login", login);
router.post("/logout",isAuthenticated,logout);


module.exports = router;