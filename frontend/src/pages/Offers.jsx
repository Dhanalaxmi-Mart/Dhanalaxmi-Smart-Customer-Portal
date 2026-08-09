import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

export default function Offers() {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        Offers Management
      </Typography>

      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        <Button
          variant="contained"
          size="large"
        >
          Add New Offer
        </Button>
      </Paper>
    </Box>
  );
}