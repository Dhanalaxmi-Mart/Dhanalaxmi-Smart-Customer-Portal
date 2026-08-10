import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  createOffer,
  getOffers,
} from "../services/offerApi";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const loadOffers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getOffers();

      setOffers(response.data.offers || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load offers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOffers();
  }, []);

  const handleOpenDialog = () => {
    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    });

    setOpen(true);
  };

  const handleCloseDialog = () => {
    if (saving) return;

    setOpen(false);
  };

  const handleSaveOffer = async () => {
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.startDate ||
      !formData.endDate
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.endDate < formData.startDate) {
      alert(
        "End Date cannot be before Start Date."
      );
      return;
    }

    try {
      setSaving(true);

      await createOffer({
        title: formData.title.trim(),
        description:
          formData.description.trim(),
        startDate: formData.startDate,
        endDate: formData.endDate,
        imageUrl: null,
      });

      setOpen(false);

      setFormData({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      });

      await loadOffers();
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
          "Failed to save offer."
      );
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "-";

    return new Date(
      `${dateValue}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          mb: 3,
        }}
      >
        Offers Management
      </Typography>

      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          mb: 3,
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={handleOpenDialog}
        >
          Add New Offer
        </Button>
      </Paper>

      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 4,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 2,
          }}
        >
          {error}
        </Alert>
      )}

      {!loading &&
        offers.length === 0 && (
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              color="text.secondary"
            >
              No offers have been created yet.
            </Typography>
          </Paper>
        )}

      {!loading &&
        offers.map((offer) => (
          <Paper
            key={offer.id}
            sx={{
              p: 2.5,
              mb: 2,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
            >
              {offer.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 0.5,
                mb: 1.5,
              }}
            >
              {offer.description}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 0.5,
              }}
            >
              {formatDate(offer.startDate)}
              {" → "}
              {formatDate(offer.endDate)}
            </Typography>

            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                color: offer.isActive
                  ? "success.main"
                  : "text.secondary",
              }}
            >
              Status:{" "}
              {offer.isActive
                ? "Active"
                : "Inactive"}
            </Typography>
          </Paper>
        ))}

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Add New Offer
        </DialogTitle>

        <DialogContent>
          <TextField
            label="Offer Title"
            fullWidth
            margin="normal"
            value={formData.title}
            onChange={(event) =>
              setFormData({
                ...formData,
                title: event.target.value,
              })
            }
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={formData.description}
            onChange={(event) =>
              setFormData({
                ...formData,
                description:
                  event.target.value,
              })
            }
          />

          <TextField
            label="Start Date"
            type="date"
            fullWidth
            margin="normal"
            value={formData.startDate}
            onChange={(event) =>
              setFormData({
                ...formData,
                startDate:
                  event.target.value,
              })
            }
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <TextField
            label="End Date"
            type="date"
            fullWidth
            margin="normal"
            value={formData.endDate}
            onChange={(event) =>
              setFormData({
                ...formData,
                endDate:
                  event.target.value,
              })
            }
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            pb: 2,
          }}
        >
          <Button
            onClick={handleCloseDialog}
            disabled={saving}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSaveOffer}
            disabled={saving}
          >
            {saving
              ? "Saving..."
              : "Save Offer"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}