const mongoose = require("mongoose");

const pantryTaskSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    mealTime: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner"],
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: String,
      default: "", // Instructions like "no salt", "low sugar", etc.
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    deliveryStatus: {
      type: String,
      enum: ["Pending", "Delivered"],
      default: "Pending",
    },
    deliveryAssignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    deliveryTime: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PantryTask", pantryTaskSchema);
