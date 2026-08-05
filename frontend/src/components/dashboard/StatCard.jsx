import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function StatCard({
  title,
  value,
  icon,
  color = "#1976d2",
}) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>

            <Typography variant="h4" fontWeight={700}>
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: color,
              color: "#fff",
              width: 56,
              height: 56,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}