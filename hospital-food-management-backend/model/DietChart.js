const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: [true, "Patient reference is required"],
    },
    meals: {
      morning: {
        items: [{ type: String, required: true }],
        instructions: { type: String, default: "" },
      },
      afternoon: {
        items: [{ type: String, required: true }],
        instructions: { type: String, default: "" },
      },
      evening: {
        items: [{ type: String, required: true }],
        instructions: { type: String, default: "" },
      },
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

module.exports = mongoose.model("DietChart", dietChartSchema);
