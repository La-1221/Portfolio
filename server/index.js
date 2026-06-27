const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");

dotenv.config();

const contactRoutes = require("./routes/contact");
const projectRoutes = require("./routes/projects");

const app = express();

// Trust proxy headers when the app is behind a reverse proxy.
// This prevents express-rate-limit from rejecting requests that include X-Forwarded-For.
app.set("trust proxy", 1);

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later."
  }
});
app.use("/api", limiter);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── 404 Handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ── Global Error Handler ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error"
  });
});

// ── Database + Server Start ───────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error(
        "Missing MONGO_URI. Copy server/.env.example to server/.env and set MONGO_URI before starting the server."
      );
    }

    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Startup error:", err.message);
    process.exit(1);
  }
};

start();
