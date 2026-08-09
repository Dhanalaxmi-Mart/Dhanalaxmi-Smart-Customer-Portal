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
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();

  const isAdmin =
    user?.role === "ADMIN";

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

    ...(isAdmin
      ? [
          {
            label: "Offers",
            path: "/offers",
            icon: <LocalOfferIcon />,
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
          {
            label: "User Management",
            path: "/settings/users",
            icon: (
              <AdminPanelSettingsIcon />
            ),
          },
        ]
      : []),
  ];

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Box
      sx={{
        width: 260,
        minWidth: 260,
        minHeight: "100vh",
        bgcolor: "#0D3B66",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          fontWeight={700}
        >
          Dhanalaxmi Mart
        </Typography>

        <Typography variant="body2">
          Smart Customer Portal
        </Typography>
      </Box>

      <Divider
        sx={{
          mx: 2,
          borderColor:
            "rgba(255,255,255,0.18)",
        }}
      />

      {/* MENU */}
      <List
        sx={{
          px: 1,
          pt: 2,
          flexGrow: 1,
        }}
      >
        {menuItems.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(
                  item.path
                );

          return (
            <ListItemButton
              key={item.path}
              onClick={() =>
                navigate(item.path)
              }
              selected={isActive}
              sx={{
                color: isActive
                  ? "#0D3B66"
                  : "#ffffff",

                bgcolor: isActive
                  ? "#F4B400"
                  : "transparent",

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

              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* USER SECTION */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
        }}
      >
        <Divider
          sx={{
            mb: 2,
            borderColor:
              "rgba(255,255,255,0.18)",
          }}
        />

        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {user?.username || "User"}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mb: 2,
            color:
              "rgba(255,255,255,0.70)",
          }}
        >
          {user?.role || "CASHIER"}
        </Typography>

        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 2,
            color: "#ffffff",

            "&:hover": {
              bgcolor:
                "rgba(255,255,255,0.10)",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "inherit",
              minWidth: 40,
            }}
          >
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText
            primary="Logout"
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}