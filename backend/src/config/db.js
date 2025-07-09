// mongodb+srv://shadahadad123:e8V7YiroDkXMZcXD@cluster0.vd1rrwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://shadahadad123:e8V7YiroDkXMZcXD@cluster0.vd1rrwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB connected successfully")
    }
    catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    
    }
};