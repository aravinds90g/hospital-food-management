const mongoose = require("mongoose");

const pantryTaskSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      ref: "Patient",
      required: true,
    },
    mealTime: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner"],
      required: true,
    },
    foodName: {
      type: String,
      required: true,
      default:"water"
    },
    ingredients: {
      type: [String],
    },
    instructions: {
      type: String,
      default: "", // Instructions like "no salt", "low sugar", etc.
    },
    taskStatus: {
      type: String,
      enum: ["In Progress", "Completed"],
      default: "In Progress",
    },
    taskAssignedTo: {
      type: String,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PantryTask", pantryTaskSchema);
