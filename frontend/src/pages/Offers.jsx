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

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [imagePreview, setImagePreview] =
    useState("");

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

  const handleOpenDialog = () => {
    setEditingOffer(null);

    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    });

    setSelectedImage(null);
    setImagePreview("");

    setOpen(true);
  };

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

    setSelectedImage(null);

    if (offer.imageUrl) {
      setImagePreview(
        `http://localhost:5000${offer.imageUrl}`
      );
    } else {
      setImagePreview("");
    }

    setOpen(true);
  };

  const handleCloseDialog = () => {
    if (saving) {
      return;
    }

    setOpen(false);
    setEditingOffer(null);
    setSelectedImage(null);
    setImagePreview("");
  };

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

      if (editingOffer) {
        const updateData =
          new FormData();

        updateData.append(
          "title",
          formData.title.trim()
        );

        updateData.append(
          "description",
          formData.description.trim()
        );

        updateData.append(
          "startDate",
          formData.startDate
        );

        updateData.append(
          "endDate",
          formData.endDate
        );

        if (selectedImage) {
          updateData.append(
            "image",
            selectedImage
          );
        }

        await updateOffer(
          editingOffer.id,
          updateData
        );
      } else {
        const uploadData =
          new FormData();

        uploadData.append(
          "title",
          formData.title.trim()
        );

        uploadData.append(
          "description",
          formData.description.trim()
        );

        uploadData.append(
          "startDate",
          formData.startDate
        );

        uploadData.append(
          "endDate",
          formData.endDate
        );

        if (selectedImage) {
          uploadData.append(
            "image",
            selectedImage
          );
        }

        await createOffer(
          uploadData
        );
      }

      setOpen(false);
      setEditingOffer(null);
      setSelectedImage(null);
      setImagePreview("");

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
              No offers have been
              created yet.
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
            {offer.imageUrl && (
              <Box
                component="img"
                src={`http://localhost:5000${offer.imageUrl}`}
                alt={offer.title}
                sx={{
                  width: "100%",
                  maxHeight: 220,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
            )}

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

          <Box
            sx={{
              mt: 2,
            }}
          >
            <Button
              variant="outlined"
              component="label"
            >
              {editingOffer
                ? "Replace Offer Banner"
                : "Choose Offer Banner"}

              <input
                type="file"
                hidden
                accept="image/jpeg,image/png,image/webp"
                onChange={(event) => {
                  const file =
                    event.target
                      .files?.[0];

                  if (!file) {
                    return;
                  }

                  setSelectedImage(
                    file
                  );

                  const previewUrl =
                    URL.createObjectURL(
                      file
                    );

                  setImagePreview(
                    previewUrl
                  );
                }}
              />
            </Button>

            {selectedImage && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 1,
                }}
              >
                Selected:{" "}
                {selectedImage.name}
              </Typography>
            )}

            {imagePreview && (
              <Box
                component="img"
                src={imagePreview}
                alt="Offer banner preview"
                sx={{
                  width: "100%",
                  maxHeight: 260,
                  objectFit:
                    "contain",
                  mt: 2,
                  borderRadius: 2,
                  border:
                    "1px solid",
                  borderColor:
                    "divider",
                }}
              />
            )}
          </Box>
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