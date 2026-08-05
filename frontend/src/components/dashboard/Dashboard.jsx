import { Box, Grid } from "@mui/material";

import StatsGrid from "./StatsGrid";
import SalesChart from "./SalesChart";
import CustomerGrowthChart from "./CustomerGrowthChart";

export default function Dashboard() {
  return (
    <Box>
      <StatsGrid />

      <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <SalesChart />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <CustomerGrowthChart />
        </Grid>
      </Grid>
    </Box>
  );
}