import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EditIcon from "@mui/icons-material/Edit";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import CustomerDialog from "../components/customer/CustomerDialog";
import AddStampDialog from "../components/loyalty/AddStampDialog";
import RedeemGiftDialog from "../components/loyalty/RedeemGiftDialog";
import { useCustomers } from "../context/CustomerContext";
import { createPurchase } from "../services/purchaseApi";
import { redeemReward } from "../services/rewardApi";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}
function formatDate(date) {
  if (!date) return "Not Available";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
function DetailCard({ title, value, icon }) {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: 2,
              display: "grid",
              placeItems: "center",
              bgcolor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            {icon}
          </Box>

          <Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>

            <Typography variant="h6" fontWeight={700}>
              {value}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function EmptyHistory({ message }) {
  return (
    <Typography color="text.secondary">
      {message}
    </Typography>
  );
}

export default function CustomerProfile() {
  const navigate = useNavigate();
  const { customerId } = useParams();

  const {
    getCustomerById,
    updateCustomer,
    getPurchaseHistoryByCustomerId,
    getStampHistoryByCustomerId,
    getRewardHistoryByCustomerId,
  } = useCustomers();

  const customer = getCustomerById(customerId);

  const [editDialogOpen, setEditDialogOpen] =
    useState(false);
  const [addStampDialogOpen, setAddStampDialogOpen] =
    useState(false);
  const [redeemDialogOpen, setRedeemDialogOpen] =
    useState(false);
  const [dialogError, setDialogError] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationSeverity, setNotificationSeverity] =
    useState("success");

  if (!customer) {
    return (
      <Box>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/customers")}
          sx={{ mb: 2 }}
        >
          Back to Customers
        </Button>

        <Alert severity="warning">
          Customer information is unavailable. Please return to
          the Customers page and open the customer again.
        </Alert>
      </Box>
    );
  }

  const stamps = Number(customer.stamps) || 0;
  const totalRequiredStamps = 5;
  const progress = Math.min(
    (stamps / totalRequiredStamps) * 100,
    100
  );

  const purchaseHistory =
    getPurchaseHistoryByCustomerId(customerId);

  const totalVisits = purchaseHistory.length;

  const totalSpend = purchaseHistory.reduce(
    (sum, purchase) =>
      sum + (Number(purchase.purchaseAmount) || 0),
    0
  );

  const averageBill =
    totalVisits > 0 ? totalSpend / totalVisits : 0;

  const stampHistory =
    getStampHistoryByCustomerId(customerId);

  const rewardHistory =
    getRewardHistoryByCustomerId(customerId);

  const showNotification = (result) => {
    setNotificationSeverity(
      result.success ? "success" : "warning"
    );
    setNotification(result.message);
  };

  const handleUpdateCustomer = async (customerData) => {
    const result = await updateCustomer(
      customerId,
      customerData
    );

    if (!result.success) {
      setDialogError(result.message);
      return;
    }

    setEditDialogOpen(false);
    setDialogError("");
    showNotification(result);
  };

  const handleAddStamp = async (details) => {
    try {
      const result = await createPurchase({
        customerId: customer.id,
        billNumber: details.billNumber,
        purchaseAmount: details.purchaseAmount,
        cashierName: details.cashierName,
      });

      showNotification(result);
      return result;
    } catch (error) {
      const result = {
        success: false,
        message:
          error.message ||
          "Unable to save purchase.",
      };

      showNotification(result);
      return result;
    }
  };

  const handleRedeemGift = async (details) => {
    try {
      const result = await redeemReward({
        customerId: customer.id,
        giftName: details.giftName,
        giftValue: details.giftValue,
        redeemedBy: details.redeemedBy,
      });

      showNotification(result);
      return result;
    } catch (error) {
      const result = {
        success: false,
        message:
          error.message ||
          "Unable to redeem gift.",
      };

      showNotification(result);
      return result;
    }
  };

  return (
    <Box>
      <Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={2}
  sx={{
    mb: 3,
    justifyContent: "space-between",
    alignItems: {
      xs: "stretch",
      sm: "center",
    },
  }}
>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/customers")}
        >
          Back to Customers
        </Button>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Button
            variant="outlined"
            startIcon={<LoyaltyIcon />}
            onClick={() => setAddStampDialogOpen(true)}
            disabled={stamps >= totalRequiredStamps}
          >
            Add Stamp
          </Button>

          <Button
            variant="contained"
            color="success"
            startIcon={<CardGiftcardIcon />}
            onClick={() => setRedeemDialogOpen(true)}
            disabled={stamps < totalRequiredStamps}
          >
            Redeem Gift
          </Button>

          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => {
              setDialogError("");
              setEditDialogOpen(true);
            }}
          >
            Edit Customer
          </Button>
        </Stack>
      </Stack>

      <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: "primary.main",
                color: "primary.contrastText",
              }}
            >
              <PersonIcon fontSize="large" />
            </Box>

            <Box>
              <Typography variant="h4" fontWeight={700}>
                {customer.name}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <PhoneIcon fontSize="small" color="action" />

                <Typography color="text.secondary">
                  {customer.mobile ||
                    customer.phone ||
                    "No mobile number"}
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Box>
            <Chip
              label={customer.status || "Active"}
              color={
                customer.status === "Inactive"
                  ? "default"
                  : "success"
              }
            />
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

<Grid container spacing={3}>

  <Grid size={{ xs: 12, md: 6 }}>
    <Typography
      variant="subtitle2"
      color="text.secondary"
    >
      Customer ID
    </Typography>

    <Typography fontWeight={600}>
      {customer.id || customerId}
    </Typography>
  </Grid>

  <Grid size={{ xs: 12, md: 6 }}>
    <Typography
      variant="subtitle2"
      color="text.secondary"
    >
      Gender
    </Typography>

    <Typography fontWeight={600}>
      {customer.gender || "Not Available"}
    </Typography>
  </Grid>

  <Grid size={{ xs: 12, md: 6 }}>
    <Typography
      variant="subtitle2"
      color="text.secondary"
    >
      Date of Birth
    </Typography>

    <Typography fontWeight={600}>
      {formatDate(customer.dob)}
    </Typography>
  </Grid>

  <Grid size={{ xs: 12, md: 6 }}>
    <Typography
      variant="subtitle2"
      color="text.secondary"
    >
      Marriage Anniversary
    </Typography>

    <Typography fontWeight={600}>
      {formatDate(customer.anniversary)}
    </Typography>
  </Grid>

  <Grid size={{ xs: 12 }}>
    <Typography
      variant="subtitle2"
      color="text.secondary"
    >
      Address / Village
    </Typography>

    <Typography fontWeight={600}>
      {customer.address || "Not Available"}
    </Typography>
  </Grid>

</Grid><Divider sx={{ my: 3 }} />
      </Paper>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DetailCard
            title="Total Visits"
            value={totalVisits}
            icon={<ShoppingCartIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DetailCard
            title="Total Spend"
            value={formatCurrency(totalSpend)}
            icon={<CurrencyRupeeIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DetailCard
            title="Average Bill"
            value={formatCurrency(averageBill)}
            icon={<CurrencyRupeeIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DetailCard
            title="Current Stamps"
            value={`${stamps}/${totalRequiredStamps}`}
            icon={<LoyaltyIcon />}
          />
        </Grid>
      </Grid>

      <Paper
  variant="outlined"
  sx={{
    p: 3,
    mb: 3,
    overflow: "visible",
  }}
>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 1 }}
        >
          <Typography variant="h6" fontWeight={700}>
            Loyalty Progress
          </Typography>

          <Typography fontWeight={700}>
            {stamps}/{totalRequiredStamps} stamps
          </Typography>
        </Stack>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 12,
            borderRadius: 8,
            mb: 1,
          }}
        />

        <Typography variant="body2" color="text.secondary">
          {stamps >= totalRequiredStamps
            ? "Free gift is ready to claim."
            : `${totalRequiredStamps - stamps} more stamp${
                totalRequiredStamps - stamps === 1 ? "" : "s"
              } needed for a free gift.`}
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            variant="outlined"
            sx={{ p: 3, minHeight: 260 }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Purchase History
            </Typography>

            {purchaseHistory.length === 0 ? (
              <EmptyHistory message="No purchase history is available yet." />
            ) : (
              <Stack divider={<Divider flexItem />} spacing={1.5}>
                {purchaseHistory.map((entry) => (
                  <Box key={`purchase-${entry.id}`}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                    >
                      <Typography fontWeight={700}>
                        Bill {entry.billNumber || "Not recorded"}
                      </Typography>

                      <Chip
                        label={
                          entry.stampEarned
                            ? "Stamp Earned"
                            : "No Stamp"
                        }
                        color={
                          entry.stampEarned
                            ? "success"
                            : "default"
                        }
                        size="small"
                      />
                    </Stack>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mt: 0.5 }}
                    >
                      {formatCurrency(entry.purchaseAmount)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {entry.date} at {entry.time}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Cashier: {entry.cashierName || "Not recorded"}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            )}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            variant="outlined"
            sx={{ p: 3, minHeight: 260 }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Stamp History
            </Typography>

            {stampHistory.length === 0 ? (
              <EmptyHistory message="No stamp transactions are available yet." />
            ) : (
              <Stack divider={<Divider flexItem />} spacing={1.5}>
                {stampHistory.map((entry) => (
                  <Box key={entry.id}>
                    <Typography fontWeight={600}>
                      Bill {entry.billNumber || "Not recorded"}
                    </Typography>

                    <Typography variant="body2">
                      Purchase:{" "}
                      {formatCurrency(entry.purchaseAmount)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {entry.date} at {entry.time}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Cashier: {entry.cashierName || "Not recorded"}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            )}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            variant="outlined"
            sx={{ p: 3, minHeight: 260 }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Reward History
            </Typography>

            {rewardHistory.length === 0 ? (
              <EmptyHistory message="No reward history is available yet." />
            ) : (
              <Stack divider={<Divider flexItem />} spacing={1.5}>
                {rewardHistory.map((entry) => (
                  <Box key={entry.id}>
                    <Typography fontWeight={600}>
                      {entry.gift}
                    </Typography>

                    <Typography variant="body2">
                      Internal value:{" "}
                      {formatCurrency(entry.giftValue)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Redeemed on {entry.date} at {entry.time}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Staff: {entry.redeemedBy || "Not recorded"}
                    </Typography>

                    <Chip
                      label={entry.status}
                      color="success"
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </Box>
                ))}
              </Stack>
            )}
          </Paper>
        </Grid>
      </Grid>

      <CustomerDialog
        open={editDialogOpen}
        customer={customer}
        onClose={() => {
          setEditDialogOpen(false);
          setDialogError("");
        }}
        onSave={handleUpdateCustomer}
        error={dialogError}
      />

      <AddStampDialog
        open={addStampDialogOpen}
        customer={customer}
        onClose={() => setAddStampDialogOpen(false)}
        onSubmit={handleAddStamp}
      />

      <RedeemGiftDialog
        open={redeemDialogOpen}
        customer={customer}
        onClose={() => setRedeemDialogOpen(false)}
        onSubmit={handleRedeemGift}
      />

      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={3500}
        onClose={() => setNotification("")}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity={notificationSeverity}
         
          variant="filled"
          onClose={() => setNotification("")}
        >
          {notification}
        </Alert>
      </Snackbar>
    </Box>
  );
}