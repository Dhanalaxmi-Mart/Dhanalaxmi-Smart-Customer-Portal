import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#0D3B66",
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="bold">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}