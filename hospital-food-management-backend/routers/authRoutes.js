const express = require("express");
const { login, register } = require("../controllers/Controller");
const router = express.Router();

// const { authenticate, authorize } = require('../middleware/authMiddleware');
// Register a new user
router.post("/register", register);

// Login user
router.post("/login", login);


module.exports = router;
