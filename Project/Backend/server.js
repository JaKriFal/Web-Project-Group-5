const express = require('express');
const { errorMiddleware } = require('./middleware/errorMiddleware');

const app = express();

// Body Parser Middleware
app.use(express.json());

// Recruiters API Routes
app.use('/api/recruiters', require('./routes/recruitersRoutes'));

// Artists API Routes
app.use('/api/artists', require('./routes/artistsRoutes'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(errorMiddleware);