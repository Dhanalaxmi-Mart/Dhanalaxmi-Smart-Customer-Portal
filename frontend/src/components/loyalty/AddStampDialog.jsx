import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const emptyForm = {
  billNumber: "",
  purchaseAmount: "",
  cashierName: "",
};

export default function AddStampDialog({
  open,
  customer,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setForm(emptyForm);
      setError("");
      setIsSubmitting(false);
    }
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    setError("");
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const billNumber = form.billNumber.trim();
    const cashierName = form.cashierName.trim();
    const purchaseAmount = Number(form.purchaseAmount);

    if (!billNumber) {
      setError("Bill number is required.");
      return;
    }

    if (
      !Number.isFinite(purchaseAmount) ||
      purchaseAmount <= 0
    ) {
      setError("Enter a valid purchase amount greater than ₹0.");
      return;
    }

    if (!cashierName) {
      setError("Cashier or staff name is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await onSubmit({
        billNumber,
        purchaseAmount,
        cashierName,
      });

      if (!result?.success) {
        setError(
          result?.message || "The purchase could not be saved."
        );
        setIsSubmitting(false);
        return;
      }

      handleClose();
    } catch (submitError) {
      console.error("Unable to save purchase:", submitError);
      setError("Something went wrong while saving the purchase.");
      setIsSubmitting(false);
    }
  };

  const purchaseAmount = Number(form.purchaseAmount);

  const eligibilityMessage =
    Number.isFinite(purchaseAmount) && purchaseAmount > 0
      ? purchaseAmount >= 600
        ? "This purchase may qualify for one stamp, subject to the daily limit and current stamp balance."
        : "This purchase will be saved, but it will not earn a stamp because it is below ₹600."
      : "Every valid bill will be saved. Purchases of ₹600 or more may earn one stamp.";

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          Record Purchase — {customer?.name || "Customer"}
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            <TextField
              label="Bill Number"
              name="billNumber"
              value={form.billNumber}
              onChange={handleChange}
              fullWidth
              required
              autoFocus
              disabled={isSubmitting}
            />

            <TextField
              label="Purchase Amount"
              name="purchaseAmount"
              type="number"
              value={form.purchaseAmount}
              onChange={handleChange}
              fullWidth
              required
              disabled={isSubmitting}
              slotProps={{
                htmlInput: {
                  min: 0.01,
                  step: "0.01",
                },
              }}
            />

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {eligibilityMessage}
            </Typography>

            <TextField
              label="Cashier / Staff Name"
              name="cashierName"
              value={form.cashierName}
              onChange={handleChange}
              fullWidth
              required
              disabled={isSubmitting}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Purchase"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}