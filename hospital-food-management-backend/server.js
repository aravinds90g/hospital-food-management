const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRouter = require("./routers/authRoutes");
const patientRouter = require("./routers/patientRoute");
const pantryRouter = require("./routers/pantrytaskRoute")
const deliveryRouter = require("./routers/deliveryTaskRoute")
const dietChartRouter = require("./routers/dietChartRouter")
const dashboardRouter = require("./routers/dashBoard")
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRouter); 

app.use("/api/v1", patientRouter);

app.use("/api/v2", pantryRouter); 

app.use("/api/v3", deliveryRouter);

app.use("/api/v5", dietChartRouter);

app.use("/api/v4", dashboardRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
