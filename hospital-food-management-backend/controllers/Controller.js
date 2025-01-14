const User = require("../model/User");
const Patient = require("../model/Patient"); 
const DietChart = require("../model/DietChart"); 
const PantryTask = require("../model/PantryTask"); 
const Delivery = require("../model/Delivery");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a patient
exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient added successfully" });
  } catch (err) {
    res.status(402).json({ error: err.message });
  }
};

// Update a patient
exports.updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    
     console.log(id);
     
    const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPatient);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    await Patient.findByIdAndDelete(id);
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a diet chart
exports.createDietChart = async (req, res) => {
  try {
    const dietChart = new DietChart(req.body);
    await dietChart.save();
    res.status(201).json({ message: "Diet chart created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get diet charts
exports.getDietCharts = async (req, res) => {
  try {
    const dietCharts = await DietChart.find();
    res.status(200).json(dietCharts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a diet chart
exports.updateDietChart = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDietChart = await DietChart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedDietChart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a diet chart
exports.deleteDietChart = async (req, res) => {
  try {
    const { id } = req.params;
    await DietChart.findByIdAndDelete(id);
    res.status(200).json({ message: "Diet chart deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// Assign pantry tasks
exports.assignPantryTasks = async (req, res) => {
  try {
    const pantryTask = new PantryTask(req.body);
    await pantryTask.save();
    res.status(201).json({ message: "Pantry task assigned successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get pantry tasks
exports.getPantryTasks = async (req, res) => {
  try {
    const pantryTasks = await PantryTask.find();
    res.status(200).json(pantryTasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update pantry task status
exports.updatePantryTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await PantryTask.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Delete pantry task status

exports.deletePantryTask = async (req, res) => {
  try {
    const { id } = req.params; // Get the task ID from the route parameter

    const deletedTask = await PantryTask.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Pantry task not found" });
    }

    res.status(200).json({
      message: "Pantry task deleted successfully",
      task: deletedTask,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};






// Assign delivery
exports.assignDelivery = async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json({ message: "Delivery assigned successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get deliveries
exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.status(200).json(deliveries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update delivery status
exports.updateDeliveryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDelivery = await Delivery.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedDelivery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// detete delivery

exports.deleteDeliveryTask = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // Find the delivery task by ID
    const task = await Delivery.findById(id);
    console.log(task)
    if (!task) {
      return res.status(404).json({ message: "Delivery task not found" });
    }

    // Delete the delivery task
    await Delivery.findByIdAndDelete(id);

    res.status(200).json({ message: "Delivery task deleted successfully" });
  } catch (err) {
    res
      .status(501)
      .json({ error: "An error occurred while deleting the delivery task" });
  }
};









// Dashboard stats
exports.getDashboardStats = async (req, res) => {
  try {
    // Example: Calculate stats (you can adjust as per requirements)
    const totalPatients = await Patient.countDocuments();
    const totalDeliveries = await Delivery.countDocuments();
    const stats = { totalPatients, totalDeliveries };
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
