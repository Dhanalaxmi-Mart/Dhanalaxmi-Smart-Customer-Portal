import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function CustomerToolbar({ onAddCustomer }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mb: 2,
      }}
    >
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddCustomer}
        sx={{
          bgcolor: "#F4B400",
          color: "#0D3B66",
          fontWeight: 700,
          "&:hover": {
            bgcolor: "#DFA500",
          },
        }}
      >
        Add Customer
      </Button>
    </Box>
  );
}