import mongoose from "mongoose";

// Import dotenv to load environment variables
export const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
} catch (error) {
    console.error("MongoB connection failed:", error.message);
    process.exit(1); // Exit the process with failure
}
};
