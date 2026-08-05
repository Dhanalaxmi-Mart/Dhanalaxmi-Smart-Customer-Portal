import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

export default function PurchaseForm({
  purchase,
  onChange,
  onSubmit,
  disabled = false,
}) {
  const handleChange = (field) => (event) => {
    onChange({
      ...purchase,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        mt: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ mb: 2 }}
      >
        Purchase Entry
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Bill Number"
              value={purchase.billNumber}
              onChange={handleChange("billNumber")}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              type="number"
              label="Purchase Amount"
              value={purchase.purchaseAmount}
              onChange={handleChange("purchaseAmount")}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Cashier Name"
              value={purchase.cashierName}
              onChange={handleChange("cashierName")}
              required
            />
          </Grid>

        </Grid>

        <Stack
          sx={{
            mt: 3,
            alignItems: "flex-end",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
            disabled={disabled}
          >
            Save Purchase
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}