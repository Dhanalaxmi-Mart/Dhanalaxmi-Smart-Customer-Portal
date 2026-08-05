import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function BillingSearch({
  searchTerm,
  onSearchTermChange,
  onSearch,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
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

      <Box component="form" onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            alignItems: {
              xs: "stretch",
              md: "center",
            },
          }}
        >
          <TextField
            fullWidth
            label="Mobile Number or Customer Name"
            value={searchTerm}
            onChange={(event) =>
              onSearchTermChange(event.target.value)
            }
            placeholder="Enter mobile number or customer name"
            autoComplete="off"
          />

          <Button
            type="submit"
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{
              minWidth: {
                xs: "100%",
                md: 150,
              },
              minHeight: 56,
            }}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}