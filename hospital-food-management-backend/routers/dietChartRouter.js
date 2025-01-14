const express = require("express");
const router = express.Router();

const { authenticate, authorize } = require("../middleware/authMiddleware");

const {
  getDietCharts,
  updateDietChart,
  deleteDietChart,
  createDietChart,
} = require("../controllers/Controller");

// Create a diet chart
router.post(
  "/diet-chart",
  authenticate,
  authorize(["manager", "pantry"]),
  createDietChart
);

// Get all diet charts
router.get(
  "/diet-chart",
  authenticate,
  authorize(["manager", "pantry"]),
  getDietCharts
);

// Update a specific diet chart
router.put(
  "/diet-chart/:id",
  authenticate,
  authorize(["manager", "pantry"]),
  updateDietChart
);

// Delete a specific diet chart
router.delete(
  "/diet-chart/:id",
  authenticate,
  authorize(["manager", "pantry"]),
  deleteDietChart
);

module.exports = router;
