import {
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

export default function RecentPurchases({
  purchases = [],
}) {
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
        Recent Purchases
      </Typography>

      {purchases.length === 0 ? (
        <Typography color="text.secondary">
          No purchases recorded yet.
        </Typography>
      ) : (
        <Stack
          divider={<Divider flexItem />}
          spacing={2}
        >
          {purchases.map((purchase) => (
            <Stack
              key={purchase.id}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography fontWeight={700}>
                  Bill {purchase.billNumber}
                </Typography>

                <Typography variant="body2">
                  {formatCurrency(
                    purchase.purchaseAmount
                  )}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {purchase.date} • {purchase.time}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Cashier:{" "}
                  {purchase.cashierName}
                </Typography>
              </Stack>

              <Chip
                label={
                  purchase.stampEarned
                    ? "Stamp Earned"
                    : "No Stamp"
                }
                color={
                  purchase.stampEarned
                    ? "success"
                    : "default"
                }
                size="small"
              />
            </Stack>
          ))}
        </Stack>
      )}
    </Paper>
  );
}