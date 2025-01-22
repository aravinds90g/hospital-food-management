const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Patient name is required"],
    },
    diagnosis: {
      type: String,
      required: [true, "Diagnosis is required"],
    },
    allergies: {
      type: [String], // Array of strings to store multiple allergies
    },
    roomNo: {
      type: String,
      required: [true, "Room number is required"],
    },
    bedNumber: {
      type: String,
      required: [true, "Bed number is required"],
    },
    floorNo: {
      type: String,
      required: [true, "Floor number is required"],
    },
    age: {
      type: Number,
      required: [true, "Patient age is required"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Gender is required"],
    },
    contactInformation: {
      type: String,
      required: [true, "Contact information is required"],
    },
    emergencyContact: {
      type: String,
      required: [true, "Emergency contact is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Patient", patientSchema);
