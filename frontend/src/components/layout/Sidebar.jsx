import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";

import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: <GroupsIcon />,
  },
  {
    label: "Billing",
    path: "/billing",
    icon: <ReceiptLongIcon />,
  },
  {
    label: "Loyalty Program",
    path: "/loyalty",
    icon: <CardGiftcardIcon />,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 260,
        minWidth: 260,
        minHeight: "100vh",
        bgcolor: "#0D3B66",
        color: "#ffffff",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={700}>
          Dhanalaxmi Mart
        </Typography>

        <Typography variant="body2">
          Smart Customer Portal
        </Typography>
      </Box>

      <Divider
        sx={{
          mx: 2,
          borderColor: "rgba(255,255,255,0.18)",
        }}
      />

      <List sx={{ px: 1, pt: 2 }}>
        {menuItems.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

          return (
            <ListItemButton
              key={item.path}
              onClick={() => navigate(item.path)}
              selected={isActive}
              sx={{
                color: isActive ? "#0D3B66" : "#ffffff",
                bgcolor: isActive ? "#F4B400" : "transparent",
                mx: 0.5,
                my: 0.5,
                borderRadius: 2,
                "&.Mui-selected": {
                  bgcolor: "#F4B400",
                  color: "#0D3B66",
                },
                "&.Mui-selected:hover": {
                  bgcolor: "#DFA500",
                },
                "&:hover": {
                  bgcolor: isActive
                    ? "#DFA500"
                    : "rgba(255,255,255,0.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}