import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Snackbar,
  Typography,
} from "@mui/material";

import { useCustomers } from "../../context/CustomerContext";
import CustomerDialog from "./CustomerDialog";
import CustomerSearch from "./CustomerSearch";
import CustomerTable from "./CustomerTable";
import CustomerToolbar from "./CustomerToolbar";

export default function CustomerPage() {
  const { customers, addCustomer } = useCustomers();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogError, setDialogError] = useState("");
  const [notification, setNotification] = useState("");

  const filteredCustomers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return customers;
    }

    return customers.filter((customer) => {
      return (
        customer.name
          .toLowerCase()
          .includes(term) ||
        customer.mobile.includes(term)
      );
    });
  }, [customers, searchTerm]);

  const handleOpenDialog = () => {
    setDialogError("");
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogError("");
    setDialogOpen(false);
  };

  const handleSaveCustomer = async (
    customerData
  ) => {
    try {
      const result =
        await addCustomer(customerData);

      if (!result.success) {
        setDialogError(result.message);
        return;
      }

      setDialogOpen(false);
      setDialogError("");
      setNotification(result.message);
    } catch (error) {
      setDialogError(
        error.message ||
          "Unable to save customer."
      );
    }
  };

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        Customers
      </Typography>

      <CustomerToolbar
        onAddCustomer={handleOpenDialog}
      />

      <CustomerSearch
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <Box mt={2}>
        <CustomerTable
          customers={filteredCustomers}
        />
      </Box>

      <CustomerDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSave={handleSaveCustomer}
        error={dialogError}
      />

      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={3000}
        onClose={() =>
          setNotification("")
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() =>
            setNotification("")
          }
        >
          {notification}
        </Alert>
      </Snackbar>
    </Box>
  );
}