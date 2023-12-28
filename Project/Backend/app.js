require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const { notFoundMiddleware } = require("./middleware/notFoundMiddleware");

connectDB();

const app = express();

// Body Parser Middleware
app.use(cors());
app.use(express.json());

// Recruiters API Routes
app.use("/api/recruiters", require("./routes/recruitersRoutes"));

// Artists API Routes
app.use("/api/artists", require("./routes/artistsRoutes"));

// Projects API Routes
app.use("/api/projects", require("./routes/projectsRoutes"));

// Jobs API Routes
app.use("/api/jobs", require("./routes/jobsRoutes"));

app.use;

app.use(errorMiddleware);
app.use(notFoundMiddleware);

module.exports = app;
