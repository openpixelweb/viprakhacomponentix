const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const globalErrorHandler = require("./middleware/global-error-handler");
const ConnectDb = require("./config/db");
const { secret } = require("./config/secret");
const categoryRoutes = require("./routes/categoryRoutes");
const productsRoutes = require("./routes/productRoute");
const couponRoutes = require("./routes/couponRoute");
const userRoute = require("./routes/userRoute");
const orderRouter = require("./routes/orderRoute");
const userOrderRoute = require("./routes/userOrderRoute");
const cloudinaryRoutes = require("./routes/cloudinaryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const brandRoutes = require("./routes/brandRoutes");

const app = express();
app.set("trust proxy", 1);
const allowedOrigins = [secret.client_url, secret.admin_url].filter(Boolean);
const isProduction = process.env.NODE_ENV === "production";

if (isProduction && allowedOrigins.length === 0) {
  throw new Error("STORE_URL/CLIENT_URL and ADMIN_URL must be configured in production");
}

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use((req, res, next) => {
  res.set("Cache-Control", "private, no-store, max-age=0");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

app.use(cors({
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-bootstrap-secret"],
}));

app.use("/api", rateLimit({ windowMs: 15 * 60 * 1000, max: 300, standardHeaders: true, legacyHeaders: false }));
app.use(["/api/user", "/api/admin"], rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false }));

ConnectDb();
app.use("/api/products", productsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/user", userRoute);
app.use("/api/order", orderRouter);
app.use("/api/user-order", userOrderRoute);
app.use("/api/cloudinary", cloudinaryRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => res.send("Apps worked successfully"));
app.get("/healthz", (req, res) => res.status(200).json({ success: true, status: "ok" }));
app.get("/readyz", (req, res) => {
  const ready = mongoose.connection.readyState === 1;
  return res.status(ready ? 200 : 503).json({ success: ready, status: ready ? "ready" : "not_ready", mongoState: mongoose.connection.readyState });
});

if (process.env.NODE_ENV !== "production") {
  app.get("/db-check", (req, res) => {
    const state = mongoose.connection.readyState;
    const statusMap = { 0: "disconnected", 1: "connected", 2: "connecting", 3: "disconnecting" };
    res.json({ mongoState: state, mongoStatus: statusMap[state] || "unknown" });
  });
}

const PORT = process.env.PORT || secret.port || 8080;
app.use(globalErrorHandler);
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not Found", errorMessages: [{ path: req.originalUrl, message: "API Not Found" }] });
});
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
