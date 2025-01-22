const express = require("express");

const router = express.Router();

const { authenticate, authorize } = require("../middleware/authMiddleware");

const { getDeliveryUser, getPantryUser } = require("../controllers/Controller");

router.get(
  "/delivery-user",
  authenticate,
  authorize(["manager"]),
  getDeliveryUser
);

router.get(
  "/pantry-user",
  authenticate,
  authorize(["manager"]),
  getPantryUser
);

module.exports = router;