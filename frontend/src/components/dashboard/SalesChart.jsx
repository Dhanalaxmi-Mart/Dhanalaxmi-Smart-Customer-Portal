import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, Typography, Box } from "@mui/material";

const salesData = [
  { day: "Mon", sales: 42000 },
  { day: "Tue", sales: 51000 },
  { day: "Wed", sales: 47000 },
  { day: "Thu", sales: 63000 },
  { day: "Fri", sales: 58000 },
  { day: "Sat", sales: 72000 },
  { day: "Sun", sales: 68000 },
];

export default function SalesChart() {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight={700}>
            Sales Trend
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Last 7 days
          </Typography>
        </Box>

        <Box sx={{ width: "100%", height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis
                tickFormatter={(value) =>
                  `₹${Math.round(value / 1000)}k`
                }
              />

              <Tooltip
                formatter={(value) => [
                  `₹${Number(value).toLocaleString("en-IN")}`,
                  "Sales",
                ]}
              />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#0D3B66"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}