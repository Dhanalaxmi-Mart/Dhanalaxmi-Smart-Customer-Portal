import Grid from "@mui/material/Grid";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import StatCard from "./StatCard";

export default function StatsGrid() {
  const stats = [
    {
      title: "Customers",
      value: "6,338",
      icon: <PeopleIcon />,
      color: "#1976d2",
    },
    {
      title: "Today's Sales",
      value: "₹58,420",
      icon: <ShoppingCartIcon />,
      color: "#2e7d32",
    },
    {
      title: "Rewards",
      value: "127",
      icon: <CardGiftcardIcon />,
      color: "#ed6c02",
    },
    {
      title: "Growth",
      value: "+12.8%",
      icon: <TrendingUpIcon />,
      color: "#9c27b0",
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid key={stat.title} size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard {...stat} />
        </Grid>
      ))}
    </Grid>
  );
}