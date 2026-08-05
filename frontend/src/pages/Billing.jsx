import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Chip,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

import BillingSearch from "../components/billing/BillingSearch";
import PurchaseForm from "../components/billing/PurchaseForm";
import RecentPurchases from "../components/billing/RecentPurchases";
import { useCustomers } from "../context/CustomerContext";

const EMPTY_PURCHASE = {
  billNumber: "",
  purchaseAmount: "",
  cashierName: "",
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

export default function Billing() {
  const {
    customers,
    addStamp,
    getPurchaseHistoryByCustomerId,
  } = useCustomers();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] =
    useState(null);

  const [purchase, setPurchase] = useState(
    EMPTY_PURCHASE
  );

  const [searchMessage, setSearchMessage] = useState("");

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const selectedCustomer = useMemo(() => {
    if (selectedCustomerId === null) {
      return null;
    }

    return customers.find(
      (customer) =>
        String(customer.id) ===
        String(selectedCustomerId)
    );
  }, [customers, selectedCustomerId]);

  const recentPurchases = useMemo(() => {
    if (!selectedCustomer) {
      return [];
    }

    const history =
      getPurchaseHistoryByCustomerId(
        selectedCustomer.id
      ) || [];

    return history.slice(0, 5);
  }, [
    selectedCustomer,
    getPurchaseHistoryByCustomerId,
  ]);

  const showNotification = (
    message,
    severity = "success"
  ) => {
    setNotification({
      open: true,
      message,
      severity,
    });
  };

  const handleSearch = () => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    if (!normalizedSearch) {
      setSelectedCustomerId(null);
      setSearchMessage(
        "Enter a customer name or mobile number."
      );
      return;
    }

    const exactMobileMatch = customers.find(
      (customer) =>
        String(customer.mobile || "").trim() ===
        normalizedSearch
    );

    const exactNameMatch = customers.find(
      (customer) =>
        String(customer.name || "")
          .trim()
          .toLowerCase() === normalizedSearch
    );

    const partialMatch = customers.find(
      (customer) =>
        String(customer.mobile || "").includes(
          normalizedSearch
        ) ||
        String(customer.name || "")
          .toLowerCase()
          .includes(normalizedSearch)
    );

    const matchedCustomer =
      exactMobileMatch ||
      exactNameMatch ||
      partialMatch;

    if (!matchedCustomer) {
      setSelectedCustomerId(null);
      setSearchMessage(
        "No customer was found with this name or mobile number."
      );
      return;
    }

    setSelectedCustomerId(matchedCustomer.id);
    setSearchMessage("");
  };

  const handlePurchaseSubmit = () => {
    if (!selectedCustomer) {
      showNotification(
        "Search and select a customer first.",
        "warning"
      );
      return;
    }

    const billNumber = purchase.billNumber.trim();
    const cashierName = purchase.cashierName.trim();
    const purchaseAmount = Number(
      purchase.purchaseAmount
    );

    if (!billNumber) {
      showNotification(
        "Enter the bill number.",
        "warning"
      );
      return;
    }

    if (
      !Number.isFinite(purchaseAmount) ||
      purchaseAmount <= 0
    ) {
      showNotification(
        "Enter a valid purchase amount greater than zero.",
        "warning"
      );
      return;
    }

    if (!cashierName) {
      showNotification(
        "Enter the cashier name.",
        "warning"
      );
      return;
    }

    const purchaseDetails = {
      billNumber,
      purchaseAmount,
      cashierName,
    };

    try {
      const result = addStamp(
        selectedCustomer.id,
        purchaseDetails
      );

      if (!result?.success) {
        showNotification(
          result?.message ||
            "The purchase could not be saved.",
          "error"
        );
        return;
      }

      showNotification(
        result.message ||
          "Purchase saved successfully.",
        result.stampAwarded ? "success" : "info"
      );

      setPurchase({
        billNumber: "",
        purchaseAmount: "",
        cashierName,
      });
    } catch (error) {
      console.error(
        "Purchase submission failed:",
        error
      );

      showNotification(
        "An unexpected error occurred while saving the purchase.",
        "error"
      );
    }
  };

  const handleCloseNotification = (
    event,
    reason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setNotification((current) => ({
      ...current,
      open: false,
    }));
  };

  const totalVisits = selectedCustomer
    ? Number(selectedCustomer.visits) || 0
    : 0;

  const totalSpend = selectedCustomer
    ? Number(selectedCustomer.totalSpend) || 0
    : 0;

  const currentStamps = selectedCustomer
    ? Number(selectedCustomer.stamps) || 0
    : 0;

  return (
    <Box>
      <Stack spacing={0.5} sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={800}>
          Billing & Purchase
        </Typography>

        <Typography color="text.secondary">
          Search for a customer and record every
          purchase bill.
        </Typography>
      </Stack>

      <BillingSearch
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
      />

      {searchMessage && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {searchMessage}
        </Alert>
      )}

      {!selectedCustomer && !searchMessage && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Search by customer name or mobile number
          to begin billing.
        </Alert>
      )}

      {selectedCustomer && (
        <>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 3,
            }}
          >
            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              spacing={3}
              sx={{
                justifyContent: "space-between",
                alignItems: {
                  xs: "stretch",
                  md: "center",
                },
              }}
            >
              <Stack spacing={0.75}>
                <Typography
                  variant="h6"
                  fontWeight={800}
                >
                  {selectedCustomer.name}
                </Typography>

                <Typography color="text.secondary">
                  Mobile: {selectedCustomer.mobile}
                </Typography>

                <Chip
                  label={
                    selectedCustomer.status ||
                    "Active"
                  }
                  color={
                    selectedCustomer.status ===
                    "Inactive"
                      ? "default"
                      : "success"
                  }
                  size="small"
                  sx={{ alignSelf: "flex-start" }}
                />
              </Stack>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    minWidth: 120,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Visits
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={800}
                  >
                    {totalVisits}
                  </Typography>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    minWidth: 140,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Total Spend
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={800}
                  >
                    {formatCurrency(totalSpend)}
                  </Typography>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    minWidth: 120,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Stamps
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={800}
                  >
                    {currentStamps} / 5
                  </Typography>
                </Paper>
              </Stack>
            </Stack>
          </Paper>

          <Alert severity="info">
            Every valid bill is saved. A purchase of
            ₹600 or more can earn one stamp, with a
            maximum of one stamp per customer per
            calendar day.
          </Alert>

          <PurchaseForm
            purchase={purchase}
            onChange={setPurchase}
            onSubmit={handlePurchaseSubmit}
            disabled={!selectedCustomer}
          />

          <RecentPurchases
            purchases={recentPurchases}
          />
        </>
      )}

      <Snackbar
        open={notification.open}
        autoHideDuration={5000}
        onClose={handleCloseNotification}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity={notification.severity}
          variant="filled"
          onClose={handleCloseNotification}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}