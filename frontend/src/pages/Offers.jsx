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
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  createOffer,
  deleteOffer,
  getOffers,
  updateOffer,
} from "../services/offerApi";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  /*
   * null = creating new offer
   * offer object = editing existing offer
   */
  const [editingOffer, setEditingOffer] =
    useState(null);

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

      setOffers(
        response.data.offers || []
      );
    } catch (err) {
      console.error(err);

      setError(
        "Failed to load offers"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOffers();
  }, []);

  /*
   * ADD NEW OFFER
   */
  const handleOpenDialog = () => {
    setEditingOffer(null);

    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    });

    setOpen(true);
  };

  /*
   * EDIT EXISTING OFFER
   */
  const handleEditOffer = (offer) => {
    setEditingOffer(offer);

    setFormData({
      title: offer.title || "",
      description:
        offer.description || "",
      startDate:
        offer.startDate || "",
      endDate:
        offer.endDate || "",
    });

    setOpen(true);
  };

  const handleCloseDialog = () => {
    if (saving) {
      return;
    }

    setOpen(false);
    setEditingOffer(null);
  };

  /*
   * CREATE OR UPDATE
   */
  const handleSaveOffer = async () => {
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.startDate ||
      !formData.endDate
    ) {
      alert(
        "Please fill all fields."
      );
      return;
    }

    if (
      formData.endDate <
      formData.startDate
    ) {
      alert(
        "End Date cannot be before Start Date."
      );
      return;
    }

    try {
      setSaving(true);

      const data = {
        title:
          formData.title.trim(),

        description:
          formData.description.trim(),

        startDate:
          formData.startDate,

        endDate:
          formData.endDate,
      };

      if (editingOffer) {
        /*
         * UPDATE EXISTING OFFER
         */
        await updateOffer(
          editingOffer.id,
          data
        );
      } else {
        /*
         * CREATE NEW OFFER
         */
        await createOffer({
          ...data,
          imageUrl: null,
        });
      }

      setOpen(false);
      setEditingOffer(null);

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
        err?.response?.data
          ?.message ||
          "Failed to save offer."
      );
    } finally {
      setSaving(false);
    }
  };

  /*
   * ACTIVE / INACTIVE
   */
  const handleToggleStatus =
    async (offer) => {
      try {
        await updateOffer(
          offer.id,
          {
            isActive:
              !offer.isActive,
          }
        );

        await loadOffers();
      } catch (err) {
        console.error(err);

        alert(
          err?.response?.data
            ?.message ||
            "Failed to update offer."
        );
      }
    };

  /*
   * DELETE
   */
  const handleDeleteOffer =
    async (offer) => {
      const confirmed =
        window.confirm(
          `Delete "${offer.title}"?`
        );

      if (!confirmed) {
        return;
      }

      try {
        await deleteOffer(
          offer.id
        );

        await loadOffers();
      } catch (err) {
        console.error(err);

        alert(
          err?.response?.data
            ?.message ||
            "Failed to delete offer."
        );
      }
    };

  const formatDate = (
    dateValue
  ) => {
    if (!dateValue) {
      return "-";
    }

    return new Date(
      `${dateValue}T00:00:00`
    ).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
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

      {/* ADD OFFER */}
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
          onClick={
            handleOpenDialog
          }
        >
          Add New Offer
        </Button>
      </Paper>

      {/* LOADING */}
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "center",
            py: 4,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {/* ERROR */}
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

      {/* EMPTY */}
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
              No offers have been
              created yet.
            </Typography>
          </Paper>
        )}

      {/* OFFER LIST */}
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
              {formatDate(
                offer.startDate
              )}
              {" → "}
              {formatDate(
                offer.endDate
              )}
            </Typography>

            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                color:
                  offer.isActive
                    ? "success.main"
                    : "text.secondary",
              }}
            >
              Status:{" "}
              {offer.isActive
                ? "Active"
                : "Inactive"}
            </Typography>

            {/* ACTION BUTTONS */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 2,
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() =>
                  handleEditOffer(
                    offer
                  )
                }
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  handleToggleStatus(
                    offer
                  )
                }
              >
                {offer.isActive
                  ? "Deactivate"
                  : "Activate"}
              </Button>

              <Button
                color="error"
                variant="outlined"
                size="small"
                onClick={() =>
                  handleDeleteOffer(
                    offer
                  )
                }
              >
                Delete Offer
              </Button>
            </Stack>
          </Paper>
        ))}

      {/* ADD / EDIT DIALOG */}
      <Dialog
        open={open}
        onClose={
          handleCloseDialog
        }
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {editingOffer
            ? "Edit Offer"
            : "Add New Offer"}
        </DialogTitle>

        <DialogContent>
          <TextField
            label="Offer Title"
            fullWidth
            margin="normal"
            value={
              formData.title
            }
            onChange={(event) =>
              setFormData({
                ...formData,
                title:
                  event.target
                    .value,
              })
            }
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={
              formData.description
            }
            onChange={(event) =>
              setFormData({
                ...formData,
                description:
                  event.target
                    .value,
              })
            }
          />

          <TextField
            label="Start Date"
            type="date"
            fullWidth
            margin="normal"
            value={
              formData.startDate
            }
            onChange={(event) =>
              setFormData({
                ...formData,
                startDate:
                  event.target
                    .value,
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
            value={
              formData.endDate
            }
            onChange={(event) =>
              setFormData({
                ...formData,
                endDate:
                  event.target
                    .value,
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
            onClick={
              handleCloseDialog
            }
            disabled={saving}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={
              handleSaveOffer
            }
            disabled={saving}
          >
            {saving
              ? "Saving..."
              : editingOffer
              ? "Update Offer"
              : "Save Offer"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}