const express = require('express');

const router = express.Router();

const { authenticate, authorize } = require("../middleware/authMiddleware");

const {
  assignPantryTasks,
  getPantryTasks,
  updatePantryTaskStatus,
  deletePantryTask,
} = require("../controllers/Controller");


router.post(
  "/pantry-tasks",
  authenticate,
  authorize(["manager"]),
  assignPantryTasks
); 

router.get(
  "/pantry-tasks",
  authenticate,
  authorize(["manager", "pantry"]),
  getPantryTasks
); // Get all pantry tasks

router.put(
  "/pantry-tasks/:id",
  authenticate,
  authorize(["manager", "pantry"]),
  updatePantryTaskStatus
); // Update pantry task

router.delete(
  "/pantry-tasks/:id",
  authenticate,
  authorize(["manager"]),
  deletePantryTask
); // Delete pantry task



module.exports = router;