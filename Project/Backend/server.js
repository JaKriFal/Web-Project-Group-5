require("dotenv").config();
const connectDB = require("./config/db");
const express = require('express');
const cors = require("cors");
const { errorMiddleware } = require('./middleware/errorMiddleware');
const { notFoundMiddleware } = require('./middleware/notFoundMiddleware');

const app = express();

const PORT = process.env.PORT || 3001;
connectDB();

// Body Parser Middleware
app.use(cors());
app.use(express.json());

// Recruiters API Routes
app.use('/api/recruiters', require('./routes/recruitersRoutes'));

// Artists API Routes
app.use('/api/artists', require('./routes/artistsRoutes'));

// Projects API Routes
app.use('/api/projects', require('./routes/projectsRoutes'));

app.use

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(errorMiddleware);
app.use(notFoundMiddleware);