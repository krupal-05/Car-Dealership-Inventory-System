import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB Database
connectDB();

app.listen(PORT, () => {
  console.log(`Car Dealership Inventory API server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
