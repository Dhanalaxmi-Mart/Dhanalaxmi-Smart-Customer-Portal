import { useNavigate } from "react-router-dom";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function CustomerTable({ customers = [] }) {
  const navigate = useNavigate();

  const openCustomerProfile = (customer) => {
    const customerId =
      customer.id || customer.mobile || customer.phone;

    navigate(`/customers/${encodeURIComponent(customerId)}`, {
      state: { customer },
    });
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Name</b>
            </TableCell>

            <TableCell>
              <b>Mobile</b>
            </TableCell>

            <TableCell align="center">
              <b>Visits</b>
            </TableCell>

            <TableCell align="center">
              <b>Stamps</b>
            </TableCell>

            <TableCell align="center">
              <b>Status</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5}>
                <Typography
                  align="center"
                  color="text.secondary"
                  sx={{ py: 4 }}
                >
                  No customers found
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            customers.map((customer) => (
              <TableRow
                key={
                  customer.id ||
                  customer.mobile ||
                  customer.phone
                }
                hover
                onClick={() => openCustomerProfile(customer)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>{customer.name}</TableCell>

                <TableCell>
                  {customer.mobile || customer.phone}
                </TableCell>

                <TableCell align="center">
                  {customer.visits || customer.totalVisits || 0}
                </TableCell>

                <TableCell align="center">
                  {customer.stamps || 0}
                </TableCell>

                <TableCell align="center">
                  <Chip
                    label={customer.status || "Active"}
                    color={
                      customer.status === "Inactive"
                        ? "default"
                        : "success"
                    }
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}