import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

const emptyForm = {
  name: "",
  mobile: "",
  dob: "",
  anniversary: "",
  gender: "",
  address: "",
};

export default function CustomerDialog({
  open,
  onClose,
  onSave,
  customer = null,
  error = "",
}) {
  const [form, setForm] = useState(emptyForm);
  const [validationError, setValidationError] =
    useState("");

  const isEditMode = Boolean(customer);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (customer) {
      setForm({
        name: customer.name || "",
        mobile: customer.mobile || "",
        dob: customer.dob || "",
        anniversary: customer.anniversary || "",
        gender: customer.gender || "",
        address: customer.address || "",
      });
    } else {
      setForm(emptyForm);
    }

    setValidationError("");
  }, [open, customer]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    let nextValue = value;

    if (name === "mobile") {
      nextValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((currentForm) => ({
      ...currentForm,
      [name]: nextValue,
    }));

    setValidationError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const mobile = form.mobile.trim();

    if (!name) {
      setValidationError("Customer name is required.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setValidationError(
        "Enter a valid 10-digit mobile number."
      );
      return;
    }

    onSave({
      name,
      mobile,
      dob: form.dob,
      anniversary: form.anniversary,
      gender: form.gender,
      address: form.address.trim(),
    });
  };

  const handleClose = () => {
    setValidationError("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          {isEditMode ? "Edit Customer" : "Add Customer"}
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {(error || validationError) && (
              <Alert severity="error">
                {validationError || error}
              </Alert>
            )}

            <TextField
              name="name"
              label="Customer Name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
              autoFocus
            />

            <TextField
              name="mobile"
              label="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{
                maxLength: 10,
                inputMode: "numeric",
                pattern: "[0-9]{10}",
              }}
              helperText="Enter a 10-digit mobile number"
            />

            <TextField
  name="dob"
  label="Date of Birth"
  type="date"
  value={form.dob}
  onChange={handleChange}
  fullWidth
  slotProps={{
    inputLabel: {
      shrink: true,
    },
  }}
/>

<TextField
  name="anniversary"
  label="Marriage Anniversary"
  type="date"
  value={form.anniversary}
  onChange={handleChange}
  fullWidth
  slotProps={{
    inputLabel: {
      shrink: true,
    },
  }}
/>

            <TextField
              name="gender"
              label="Gender"
              value={form.gender}
              onChange={handleChange}
              fullWidth
              select
            >
              <MenuItem value="">
                Not specified
              </MenuItem>
              <MenuItem value="Male">
                Male
              </MenuItem>
              <MenuItem value="Female">
                Female
              </MenuItem>
              <MenuItem value="Other">
                Other
              </MenuItem>
            </TextField>

            <TextField
              name="address"
              label="Address / Village"
              value={form.address}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={2}
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose}>
            Cancel
          </Button>

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#F4B400",
              color: "#0D3B66",
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#DFA500",
              },
            }}
          >
            {isEditMode
              ? "Update Customer"
              : "Save Customer"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}