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
} from "@mui/material";

const emptyForm = {
  giftName: "",
  giftValue: "",
  redeemedBy: "",
};

export default function RedeemGiftDialog({
  open,
  customer,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setForm(emptyForm);
      setError("");
    }
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const giftName = form.giftName.trim();
    const redeemedBy = form.redeemedBy.trim();
    const giftValue = Number(form.giftValue);

    if (
      !giftName ||
      !redeemedBy ||
      !Number.isFinite(giftValue) ||
      giftValue < 0
    ) {
      setError(
        "Enter gift name, internal gift value, and staff name."
      );
      return;
    }

    const result = onSubmit({
      giftName,
      giftValue,
      redeemedBy,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Redeem Gift — {customer?.name || "Customer"}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {error && <Alert severity="warning">{error}</Alert>}

          <TextField
            label="Gift Name"
            name="giftName"
            value={form.giftName}
            onChange={handleChange}
            fullWidth
            required
            autoFocus
          />

          <TextField
            label="Internal Gift Value"
            name="giftValue"
            type="number"
            value={form.giftValue}
            onChange={handleChange}
            fullWidth
            required
            helperText="For internal reporting only."
            inputProps={{ min: 0, step: "0.01" }}
          />

          <TextField
            label="Redeemed By / Staff Name"
            name="redeemedBy"
            value={form.redeemedBy}
            onChange={handleChange}
            fullWidth
            required
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Confirm Redemption
        </Button>
      </DialogActions>
    </Dialog>
  );
}