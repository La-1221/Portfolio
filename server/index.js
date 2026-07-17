const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");

dotenv.config();

// Override DNS servers to public ones (Google DNS / Cloudflare DNS)
// to resolve MongoDB SRV connection issues (querySrv ETIMEOUT)
try {
  const dns = require("dns");
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (err) {
  console.warn("⚠️ Warning: Failed to set custom DNS servers:", err.message);
}

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

let MONGO_URI = process.env.MONGO_URI;

// If MONGO_URI is missing or contains placeholder characters, build it
// from separate env vars. URL-encode the password to avoid parsing issues.
if (!MONGO_URI || MONGO_URI.includes("<") || MONGO_URI.includes(">")) {
  const user = process.env.MONGO_USER;
  const pass = process.env.MONGO_PASS;
  const host = process.env.MONGO_HOST || "cluster0.0oeaye4.mongodb.net";
  const db = process.env.MONGO_DB || "";
  if (user && pass) {
    MONGO_URI = `mongodb+srv://${user}:${encodeURIComponent(pass)}@${host}/${db}?retryWrites=true&w=majority`;
  }
}

const start = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error(
        "Missing MONGO_URI (or MONGO_USER/MONGO_PASS). Set connection details in server/.env."
      );
    }

    const tlsAllowInvalidCertificates =
      process.env.MONGO_TLS_ALLOW_INVALID_CERTS === "true";

    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      tls: true,
      tlsAllowInvalidCertificates
      // useUnifiedTopology and useNewUrlParser are default in modern mongoose
    });

    if (tlsAllowInvalidCertificates) {
      console.warn(
        "⚠️ Warning: TLS certificate validation is disabled. Use only for local debugging."
      );
    }

    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Startup error:", err.message || err);
    process.exit(1);
  }
};

start();
