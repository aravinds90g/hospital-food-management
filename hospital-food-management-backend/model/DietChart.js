const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema(
  {
    patientName: {
      type: String, // References the Patient collection
      required: true,
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
