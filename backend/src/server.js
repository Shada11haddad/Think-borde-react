import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import notesRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js"; // ✅ استوردنا الميدلوير

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const __dirname = path.resolve();

// ✅ Always enable CORS for frontend dev
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://your-production-site.com"
        : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(ratelimiter);

// ✅ Routes
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  // ✅ إذا كنا في بيئة الإنتاج، نستخدم ملفات البناء
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // ✅ أي طلب غير معروف يعيد توجيهه إلى index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
// ✅ اتصال بقاعدة البيانات + تشغيل السيرفر
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
  });
});
