import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, Typography, Box } from "@mui/material";

const customerData = [
  { month: "Jan", customers: 420 },
  { month: "Feb", customers: 510 },
  { month: "Mar", customers: 475 },
  { month: "Apr", customers: 620 },
  { month: "May", customers: 690 },
  { month: "Jun", customers: 760 },
];

export default function CustomerGrowthChart() {
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
            Customer Growth
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Last 6 months
          </Typography>
        </Box>

        <Box sx={{ width: "100%", height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip
                formatter={(value) => [
                  Number(value).toLocaleString("en-IN"),
                  "Customers",
                ]}
              />

              <Bar
                dataKey="customers"
                fill="#F4B400"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}