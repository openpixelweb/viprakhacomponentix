import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import careerRoutes from "./routes/career.routes.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  process.env.FRONTEND_URL,
]
  .filter(Boolean)
  .map((origin) => origin.replace(/\/$/, ""));

app.use(
  cors({
    origin(origin, callback) {
      const normalizedOrigin = origin?.replace(/\/$/, "");
      if (!origin || allowedOrigins.includes(normalizedOrigin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin is not allowed by CORS."));
    },
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/", (_req, res) => {
  res.json({ success: true, message: "Viprakha forms backend is running." });
});
app.use("/api", contactRoutes);
app.use("/api", careerRoutes);

app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError && error.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ success: false, message: "Resume size must be less than 5MB." });
  }
  console.error("SERVER ERROR:", error);
  return res.status(500).json({ success: false, message: "Server error. Please try again later." });
});

const port = Number(process.env.PORT || 5000);
app.listen(port, () => console.log(`Viprakha backend running on port ${port}`));
