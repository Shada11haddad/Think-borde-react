import express from 'express';
import notesRoutes from './routes/noteRoutes.js'; // Adjust the path as necessary
import { connectDB } from './config/db.js';
const app = express();

app.use("/api/notes", notesRoutes);

connectDB(); // Ensure the database connection is established

app.listen(5001, () => {
  console.log('Server is running on port 5001'); // <- corrected
});



