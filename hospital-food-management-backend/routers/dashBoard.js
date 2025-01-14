const express = require("express")
const router = express.Router()
const { authenticate, authorize } = require("../middleware/authMiddleware")

const { getDashboardStats } = require("../controllers/Controller")

router.get("/dashboard", authenticate, authorize(["manager"]), getDashboardStats);

module.exports = router;