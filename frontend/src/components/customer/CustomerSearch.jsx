import {
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function CustomerSearch({
  value,
  onChange,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
 <TextField
  fullWidth
  size="small"
  value={value}
  onChange={(event) => onChange(event.target.value)}
  placeholder="Search customers by name or mobile number"
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon color="action" />
        </InputAdornment>
      ),
    },
  }}
/>
    </Paper>
  );
}