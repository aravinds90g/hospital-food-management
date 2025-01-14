const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: [true, "Patient reference is required"],
    },
    deliveryPersonnel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming delivery personnel are stored in the User model
      required: [true, "Delivery personnel reference is required"],
    },
    meals: {
      type: String,
      enum: ["Morning", "Afternoon", "Evening"],
      required: [true, "Meal type is required"],
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Failed"],
      default: "Pending",
    },
    deliveryTime: {
      type: Date,
      default: null,
    },
    notes: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Delivery", deliverySchema);
