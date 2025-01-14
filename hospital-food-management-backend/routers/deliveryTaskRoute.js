const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middleware/authMiddleware");

const {
  assignDelivery,
  updateDeliveryStatus,
  getDeliveries,
  deleteDeliveryTask,
} = require("../controllers/Controller");

// Delivery Task Routes (Accessible by Delivery Personnel and Manager)

// Assign a new delivery task
router.post(
  "/delivery-tasks",
  authenticate,
  authorize(["manager", "delivery"]),
  assignDelivery
);

// Mark a specific delivery task as completed
router.put(
  "/delivery-tasks/:id",
  authenticate,
  authorize(["manager", "delivery"]),
  updateDeliveryStatus
);

// Get all delivery tasks
router.get(
  "/delivery-tasks",
  authenticate,
  authorize(["manager", "delivery"]),
  getDeliveries
);

// Delete a specific delivery task
router.delete(
  "/delivery-tasks/:id",
  authenticate,
  authorize(["manager"]),
  deleteDeliveryTask
);

module.exports = router;
