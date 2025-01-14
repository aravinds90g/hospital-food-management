const express = require("express");

const router = express.Router();

const { authenticate, authorize } = require("../middleware/authMiddleware");

const { getPatients, createPatient, updatePatient, deletePatient } = require("../controllers/Controller");

router.post("/patients", authenticate, authorize(["manager"]), createPatient); // Create patient

router.get(
  "/patients",
  authenticate,
  authorize(["manager", "pantry", "delivery"]),
  getPatients
); // Get all patients
router.put(
  "/patients/:id",
  authenticate,
  authorize(["manager"]),
  updatePatient
); // Update patient
router.delete(
  "/patients/:id",
  authenticate,
  authorize(["manager"]),
  deletePatient
); // Delete patient

module.exports = router;
