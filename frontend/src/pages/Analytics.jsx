import { useMemo } from "react";
import {
  Box,
  Chip,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import RedeemIcon from "@mui/icons-material/Redeem";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import { useCustomers } from "../context/CustomerContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function StatCard({ title, value, subtitle, icon }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.5,
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            display: "grid",
            placeItems: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {title}
          </Typography>

          <Typography
            variant="h5"
            fontWeight={800}
          >
            {value}
          </Typography>

          {subtitle && (
            <Typography
              variant="caption"
              color="text.secondary"
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Stack>
    </Paper>
  );
}

export default function Analytics() {
  const {
    customers,
    purchaseHistory,
    stampHistory,
    rewardHistory,
  } = useCustomers();

  const analytics = useMemo(() => {
    const totalCustomers = customers.length;

    const activeCustomers = customers.filter(
      (customer) =>
        String(customer.status).toLowerCase() ===
        "active"
    ).length;

    const inactiveCustomers =
      totalCustomers - activeCustomers;

    const totalSales = purchaseHistory.reduce(
      (sum, entry) =>
        sum + (Number(entry.purchaseAmount) || 0),
      0
    );

    const totalBills = purchaseHistory.length;

    const averageBill =
      totalBills > 0 ? totalSales / totalBills : 0;

    const totalStamps = stampHistory.length;
const totalRewards = rewardHistory.length;

// Customer Redemption Rate
const redemptionRate =
  totalCustomers > 0
    ? (totalRewards * 100) / totalCustomers
    : 0;

    const topCustomers = [...customers]
      .sort(
        (a, b) =>
          (Number(b.totalSpend) || 0) -
          (Number(a.totalSpend) || 0)
      )
      .slice(0, 5);

    const cashierMap = {};

    purchaseHistory.forEach((entry) => {
      const cashier =
        String(entry.cashierName || "Unknown").trim() ||
        "Unknown";

      if (!cashierMap[cashier]) {
        cashierMap[cashier] = {
          name: cashier,
          bills: 0,
          sales: 0,
          stamps: 0,
        };
      }

      cashierMap[cashier].bills += 1;
      cashierMap[cashier].sales +=
        Number(entry.purchaseAmount) || 0;

      if (entry.stampEarned) {
        cashierMap[cashier].stamps += 1;
      }
    });

    const cashierPerformance = Object.values(
      cashierMap
    ).sort((a, b) => b.sales - a.sales);

    return {
      totalCustomers,
      activeCustomers,
      inactiveCustomers,
      totalSales,
      totalBills,
      averageBill,
      totalStamps,
      totalRewards,
      redemptionRate,
      topCustomers,
      cashierPerformance,
    };
  }, [
    customers,
    purchaseHistory,
    stampHistory,
    rewardHistory,
  ]);

  const activeRate =
    analytics.totalCustomers > 0
      ? (analytics.activeCustomers /
          analytics.totalCustomers) *
        100
      : 0;

  return (
    <Box>
      <Stack spacing={0.5} sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={800}>
          Analytics Dashboard
        </Typography>

        <Typography color="text.secondary">
          Live business insights from customer,
          billing, loyalty, and reward data.
        </Typography>
      </Stack>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <StatCard
            title="Total Customers"
            value={analytics.totalCustomers}
            subtitle={`${analytics.activeCustomers} active`}
            icon={<GroupsIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <StatCard
            title="Total Sales"
            value={formatCurrency(
              analytics.totalSales
            )}
            subtitle="All recorded purchases"
            icon={<CurrencyRupeeIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <StatCard
            title="Total Bills"
            value={analytics.totalBills}
            subtitle={`Average ${formatCurrency(
              analytics.averageBill
            )}`}
            icon={<ReceiptLongIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <StatCard
            title="Stamps Issued"
            value={analytics.totalStamps}
            subtitle="Eligible purchases"
            icon={<LoyaltyIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <StatCard
            title="Gifts Redeemed"
            value={analytics.totalRewards}
            subtitle="Completed redemptions"
            icon={<RedeemIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <StatCard
            title="Customer Redemption Rate"
            value={`${analytics.redemptionRate.toFixed(
              1
            )}%`}
            subtitle="Customers who redeemed rewards"
            icon={<TrendingUpIcon />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Customer Activity
            </Typography>

            <Stack spacing={2}>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mb: 0.75 }}
                >
                  <Typography variant="body2">
                    Active Customers
                  </Typography>

                  <Typography
                    variant="body2"
                    fontWeight={700}
                  >
                    {analytics.activeCustomers} /{" "}
                    {analytics.totalCustomers}
                  </Typography>
                </Stack>

                <LinearProgress
                  variant="determinate"
                  value={Math.min(activeRate, 100)}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                  }}
                />
              </Box>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
              >
                <Chip
                  label={`Active: ${analytics.activeCustomers}`}
                  color="success"
                />

                <Chip
                  label={`Inactive: ${analytics.inactiveCustomers}`}
                />
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Loyalty Performance
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Stamps Issued
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={800}
                  >
                    {analytics.totalStamps}
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Gifts Redeemed
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={800}
                  >
                    {analytics.totalRewards}
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Conversion
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={800}
                  >
                    {analytics.redemptionRate.toFixed(
                      1
                    )}
                    %
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Paper
            variant="outlined"
            sx={{ p: 3 }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Top Customers
            </Typography>

            {analytics.topCustomers.length === 0 ? (
              <Typography color="text.secondary">
                No customer data is available.
              </Typography>
            ) : (
              <Stack spacing={1.5}>
                {analytics.topCustomers.map(
                  (customer, index) => (
                    <Paper
                      key={customer.id}
                      variant="outlined"
                      sx={{
                        p: 2,
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                      >
                        <Stack>
                          <Typography fontWeight={700}>
                            {index + 1}.{" "}
                            {customer.name}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {customer.mobile}
                          </Typography>
                        </Stack>

                        <Stack
                          alignItems="flex-end"
                          spacing={0.25}
                        >
                          <Typography fontWeight={800}>
                            {formatCurrency(
                              customer.totalSpend
                            )}
                          </Typography>

                          <Typography
                            variant="caption"
                            color="text.secondary"
                          >
                            {Number(customer.visits) ||
                              0}{" "}
                            visits
                          </Typography>
                        </Stack>
                      </Stack>
                    </Paper>
                  )
                )}
              </Stack>
            )}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Paper
            variant="outlined"
            sx={{ p: 3 }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Cashier Performance
            </Typography>

            {analytics.cashierPerformance.length ===
            0 ? (
              <Typography color="text.secondary">
                No billing data is available.
              </Typography>
            ) : (
              <Stack spacing={1.5}>
                {analytics.cashierPerformance.map(
                  (cashier) => (
                    <Paper
                      key={cashier.name}
                      variant="outlined"
                      sx={{ p: 2 }}
                    >
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "row",
                        }}
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <Box>
                          <Typography fontWeight={700}>
                            {cashier.name}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {cashier.bills} bills ·{" "}
                            {cashier.stamps} stamps
                          </Typography>
                        </Box>

                        <Typography fontWeight={800}>
                          {formatCurrency(
                            cashier.sales
                          )}
                        </Typography>
                      </Stack>
                    </Paper>
                  )
                )}
              </Stack>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}