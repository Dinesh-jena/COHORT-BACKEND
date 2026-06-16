//routes kon kon se hai uske liye hai buss iske alwa kuch nahi
const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");

const router = express.Router();

/*
Post/register
Post/login
Get/user[protected]
*/

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
