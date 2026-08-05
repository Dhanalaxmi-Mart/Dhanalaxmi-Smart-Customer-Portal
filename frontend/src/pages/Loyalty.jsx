import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RedeemIcon from "@mui/icons-material/Redeem";
import SearchIcon from "@mui/icons-material/Search";

import { useCustomers } from "../context/CustomerContext";

const EMPTY_REWARD = {
  giftName: "",
  giftValue: "",
  redeemedBy: "",
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

export default function Loyalty() {
  const {
    customers,
    redeemGift,
    getRewardHistoryByCustomerId,
  } = useCustomers();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] =
    useState(null);

  const [reward, setReward] = useState(EMPTY_REWARD);

  const [searchMessage, setSearchMessage] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

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

  const rewardHistory = useMemo(() => {
    if (!selectedCustomer) {
      return [];
    }

    return getRewardHistoryByCustomerId(
      selectedCustomer.id
    );
  }, [
    selectedCustomer,
    getRewardHistoryByCustomerId,
  ]);

  const currentStamps = selectedCustomer
    ? Number(selectedCustomer.stamps) || 0
    : 0;

  const canRedeem = currentStamps >= 5;

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
    setReward(EMPTY_REWARD);
  };

  const handleRewardChange = (field) => (event) => {
    setReward((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const validateReward = () => {
    if (!selectedCustomer) {
      showNotification(
        "Search and select a customer first.",
        "warning"
      );
      return false;
    }

    if (!canRedeem) {
      showNotification(
        "This customer does not have 5 stamps yet.",
        "warning"
      );
      return false;
    }

    if (!reward.giftName.trim()) {
      showNotification(
        "Select or enter the gift name.",
        "warning"
      );
      return false;
    }

    const giftValue = Number(reward.giftValue);

    if (
      !Number.isFinite(giftValue) ||
      giftValue < 0
    ) {
      showNotification(
        "Enter a valid internal gift value.",
        "warning"
      );
      return false;
    }

    if (!reward.redeemedBy.trim()) {
      showNotification(
        "Enter the staff name.",
        "warning"
      );
      return false;
    }

    return true;
  };

  const handleOpenConfirmation = () => {
    if (!validateReward()) {
      return;
    }

    setConfirmOpen(true);
  };

  const handleConfirmRedemption = () => {
    const result = redeemGift(
      selectedCustomer.id,
      {
        giftName: reward.giftName.trim(),
        giftValue: Number(reward.giftValue),
        redeemedBy: reward.redeemedBy.trim(),
      }
    );

    setConfirmOpen(false);

    if (!result?.success) {
      showNotification(
        result?.message ||
          "The reward could not be redeemed.",
        "error"
      );
      return;
    }

    showNotification(
      result.message ||
        "Free gift redeemed successfully.",
      "success"
    );

    setReward((current) => ({
      giftName: "",
      giftValue: "",
      redeemedBy: current.redeemedBy,
    }));
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

  return (
    <Box>
      <Stack spacing={0.5} sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={800}>
          Loyalty Program
        </Typography>

        <Typography color="text.secondary">
          Check stamp balances, redeem free gifts,
          and review reward history.
        </Typography>
      </Stack>

      <Paper
        variant="outlined"
        sx={{
          p: 3,
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ mb: 2 }}
        >
          Customer Search
        </Typography>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={2}
        >
          <TextField
            fullWidth
            label="Mobile Number or Customer Name"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
            sx={{
              minWidth: 140,
            }}
          >
            Search
          </Button>
        </Stack>
      </Paper>

      {searchMessage && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {searchMessage}
        </Alert>
      )}

      {!selectedCustomer && !searchMessage && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Search for a customer to check loyalty
          eligibility.
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
              justifyContent="space-between"
              alignItems={{
                xs: "stretch",
                md: "center",
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

              <Paper
                variant="outlined"
                sx={{
                  p: 2.5,
                  minWidth: 180,
                  textAlign: "center",
                }}
              >
                <CardGiftcardIcon
                  sx={{
                    fontSize: 34,
                    mb: 0.5,
                  }}
                />

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Current Stamps
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={800}
                >
                  {currentStamps} / 5
                </Typography>
              </Paper>
            </Stack>
          </Paper>

          <Alert
            severity={canRedeem ? "success" : "info"}
            sx={{ mb: 3 }}
          >
            {canRedeem
              ? "This customer is eligible for a free gift."
              : `${5 - currentStamps} more stamp${
                  5 - currentStamps === 1 ? "" : "s"
                } required before redemption.`}
          </Alert>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Redeem Free Gift
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  select
                  fullWidth
                  label="Gift Name"
                  value={reward.giftName}
                  onChange={handleRewardChange(
                    "giftName"
                  )}
                  disabled={!canRedeem}
                >
                  <MenuItem value="Store Selected Gift">
                    Store Selected Gift
                  </MenuItem>

                  <MenuItem value="Household Gift">
                    Household Gift
                  </MenuItem>

                  <MenuItem value="Kitchen Gift">
                    Kitchen Gift
                  </MenuItem>

                  <MenuItem value="Personal Care Gift">
                    Personal Care Gift
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="number"
                  label="Internal Gift Value"
                  value={reward.giftValue}
                  onChange={handleRewardChange(
                    "giftValue"
                  )}
                  disabled={!canRedeem}
                  inputProps={{
                    min: 0,
                  }}
                  helperText="Internal record only; not shown to the customer."
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Issued By"
                  value={reward.redeemedBy}
                  onChange={handleRewardChange(
                    "redeemedBy"
                  )}
                  disabled={!canRedeem}
                />
              </Grid>
            </Grid>

            <Stack
              direction="row"
              justifyContent="flex-end"
              sx={{ mt: 3 }}
            >
              <Button
                variant="contained"
                startIcon={<RedeemIcon />}
                disabled={!canRedeem}
                onClick={handleOpenConfirmation}
              >
                Redeem Gift
              </Button>
            </Stack>
          </Paper>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Reward History
            </Typography>

            {rewardHistory.length === 0 ? (
              <Typography color="text.secondary">
                No reward history is available yet.
              </Typography>
            ) : (
              <Stack
                divider={<Divider flexItem />}
                spacing={2}
              >
                {rewardHistory.map((entry) => (
                  <Stack
                    key={entry.id}
                    direction={{
                      xs: "column",
                      md: "row",
                    }}
                    spacing={2}
                    justifyContent="space-between"
                  >
                    <Stack spacing={0.5}>
                      <Typography fontWeight={700}>
                        {entry.gift}
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
                        Issued by: {entry.redeemedBy}
                      </Typography>
                    </Stack>

                    <Stack
                      alignItems={{
                        xs: "flex-start",
                        md: "flex-end",
                      }}
                      spacing={0.5}
                    >
                      <Chip
                        label={entry.status || "Redeemed"}
                        color="success"
                        size="small"
                      />

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Internal value:{" "}
                        {formatCurrency(
                          entry.giftValue
                        )}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Stamps used:{" "}
                        {entry.stampsUsed || 5}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            )}
          </Paper>
        </>
      )}

      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
      >
        <DialogTitle>
          Confirm Gift Redemption
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Redeem the free gift for{" "}
            <strong>{selectedCustomer?.name}</strong>?
            This will use 5 stamps and reset the
            current stamp balance to 0.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setConfirmOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={handleConfirmRedemption}
          >
            Confirm Redemption
          </Button>
        </DialogActions>
      </Dialog>

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