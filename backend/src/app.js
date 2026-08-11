const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const customerRoutes = require("./routes/customer.routes");
const purchaseRoutes = require("./routes/purchase.routes");
const rewardRoutes = require("./routes/reward.routes");
const backupRoutes = require("./routes/backup.routes");
const offerRoutes = require("./routes/offer.routes");

const customerPortalRoutes = require(
  "./routes/customerPortal.routes"
);

const app = express();

/* CORS */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

/* Body Parser */
app.use(express.json());
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "../uploads")
  )
);
/* Health Check */
app.get("/", (req, res) => {
  res.json({
    app: "Dhanalaxmi Smart Retail Platform",
    status: "Running",
  });
});

/* Authentication */
app.use("/api/auth", authRoutes);

/* User Management */
app.use("/api/users", userRoutes);

/* Customers */
app.use("/api/customers", customerRoutes);

/* Purchases */
app.use("/api/purchases", purchaseRoutes);

/* Rewards */
app.use("/api/rewards", rewardRoutes);

/* Database Backups */
app.use("/api/backups", backupRoutes);

/* Offers */
app.use("/api/offers", offerRoutes);

/* Customer QR Portal */
app.use(
  "/api/customer-portal",
  customerPortalRoutes
);

module.exports = app;