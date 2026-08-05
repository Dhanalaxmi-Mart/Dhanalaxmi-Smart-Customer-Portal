const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customer.routes");
const purchaseRoutes = require("./routes/purchase.routes");
const rewardRoutes = require("./routes/reward.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "Dhanalaxmi Smart Retail Platform",
    status: "Running",
  });
});

app.use("/api/customers", customerRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/rewards", rewardRoutes);

module.exports = app;