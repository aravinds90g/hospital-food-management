const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    patientName: {
      type: String, // References the Patient collection
      required: true,
    },
    mealTime: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner"],
      required: true,
    },
    foodName:{
      type:String,
      default:"water"
    },
    roomNo: {
      type: String, // Array of strings for ingredients
      required: true,
    },
    floorNo: {
      type: String, // Special delivery instructions
      default: "",
      required: true,
    },
    deliveryAssignedTo: {
      type: String, // References the Delivery Staff collection
      required: true,
    },
    taskStatus: {
      type: String,
      enum: ["In Progress", "Completed"],
      default: "In Progress",
    },
    deliveryStatus: {
      type: String,
      enum: ["Pending", "Delivered"],
      default: "Pending",
    },
    deliveryTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Delivery", deliverySchema);
