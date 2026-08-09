import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import StorefrontIcon from "@mui/icons-material/Storefront";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BackupIcon from "@mui/icons-material/Backup";
import RefreshIcon from "@mui/icons-material/Refresh";

import {
  createBackup,
  fetchBackups,
  downloadBackup,
  deleteBackup,
} from "../services/backupApi";
function formatFileSize(bytes) {
  const size = Number(bytes) || 0;

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(
    size /
    (1024 * 1024)
  ).toFixed(1)} MB`;
}

function formatBackupDate(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function Settings() {
  const [backups, setBackups] = useState([]);

  const [backupLoading, setBackupLoading] =
    useState(true);

  const [
    backupCreating,
    setBackupCreating,
  ] = useState(false);

  const [backupError, setBackupError] =
    useState("");

  const [
    notification,
    setNotification,
  ] = useState("");

  const loadBackups = async () => {
    try {
      setBackupLoading(true);
      setBackupError("");

      const data = await fetchBackups();

      setBackups(
        Array.isArray(data) ? data : []
      );
    } catch (error) {
      console.error(
        "Unable to load backups:",
        error
      );

      setBackupError(
        error.message ||
          "Unable to load backup history."
      );
    } finally {
      setBackupLoading(false);
    }
  };

  useEffect(() => {
    loadBackups();
  }, []);

  const handleCreateBackup = async () => {
    try {
      setBackupCreating(true);
      setBackupError("");

      const result =
        await createBackup();

      setNotification(
        result?.message ||
          "Database backup created successfully."
      );

      await loadBackups();
    } catch (error) {
      console.error(
        "Unable to create backup:",
        error
      );

      setBackupError(
        error.message ||
          "Unable to create database backup."
      );
    } finally {
      setBackupCreating(false);
    }
  };

  const latestBackup =
    backups.length > 0
      ? backups[0]
      : null;

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight={700}
      >
        Settings
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 0.5,
          mb: 3,
        }}
      >
        Manage store information,
        loyalty rules, system
        configuration, and database
        backups.
      </Typography>

      <Grid container spacing={3}>
        {/* STORE INFORMATION */}
        <Grid
          size={{
            xs: 12,
            lg: 6,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <StorefrontIcon
                  sx={{
                    color: "#0D3B66",
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  Store Information
                </Typography>
              </Stack>

              <Divider sx={{ my: 2.5 }} />

              <Grid
                container
                spacing={2}
              >
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Store Name"
                    defaultValue="Dhanalaxmi Mart"
                    fullWidth
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Tagline"
                    defaultValue="Save More Every Day!"
                    fullWidth
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Website"
                    defaultValue="www.dhanalaxmimart.com"
                    fullWidth
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Phone Number"
                    defaultValue="9777790769"
                    fullWidth
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                  }}
                >
                  <TextField
                    label="Address"
                    defaultValue="College Square, Polasara, Ganjam, Odisha"
                    multiline
                    rows={3}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                disabled
                sx={{
                  mt: 2.5,
                  px: 3,
                }}
              >
                Save Changes
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "block",
                  mt: 1,
                }}
              >
                Store settings persistence
                will be added in a later
                update.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* LOYALTY PROGRAM */}
        <Grid
          size={{
            xs: 12,
            lg: 6,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <LoyaltyIcon
                  sx={{
                    color: "#0D3B66",
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  Loyalty Program
                </Typography>
              </Stack>

              <Divider sx={{ my: 2.5 }} />

              <Grid
                container
                spacing={2}
              >
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Spend Required Per Stamp"
                    type="number"
                    defaultValue="600"
                    fullWidth
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Stamps Required For Gift"
                    type="number"
                    defaultValue="5"
                    fullWidth
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Stamp Expiry (Days)"
                    type="number"
                    defaultValue="45"
                    fullWidth
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    label="Reward Expiry (Days)"
                    type="number"
                    defaultValue="15"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Box
                sx={{
                  mt: 2.5,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "#F5F7FA",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                >
                  Current Loyalty Rule
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Spend ₹600 → 1 Stamp •
                  Maximum 1 stamp per customer
                  per day • 5 stamps → Free Gift
                </Typography>
              </Box>

              <Button
                variant="contained"
                disabled
                sx={{
                  mt: 2.5,
                  px: 3,
                }}
              >
                Save Loyalty Rules
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "block",
                  mt: 1,
                }}
              >
                Loyalty rule persistence will
                be connected to the backend
                later.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* BACKUP */}
        <Grid
          size={{
            xs: 12,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                justifyContent="space-between"
                alignItems={{
                  xs: "stretch",
                  sm: "center",
                }}
                spacing={2}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <BackupIcon
                    sx={{
                      color: "#0D3B66",
                    }}
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      Backup & Restore
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Protect customer,
                      purchase, loyalty,
                      reward, and user data.
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                >
                  <Button
                    variant="outlined"
                    startIcon={
                      <RefreshIcon />
                    }
                    onClick={loadBackups}
                    disabled={
                      backupLoading ||
                      backupCreating
                    }
                  >
                    Refresh
                  </Button>

                  <Button
                    variant="contained"
                    startIcon={
                      backupCreating ? (
                        <CircularProgress
                          size={18}
                          color="inherit"
                        />
                      ) : (
                        <BackupIcon />
                      )
                    }
                    onClick={
                      handleCreateBackup
                    }
                    disabled={
                      backupCreating
                    }
                  >
                    {backupCreating
                      ? "Creating..."
                      : "Create Backup"}
                  </Button>
                </Stack>
              </Stack>

              <Divider sx={{ my: 2.5 }} />

              {backupError && (
                <Alert
                  severity="error"
                  sx={{ mb: 2 }}
                  onClose={() =>
                    setBackupError("")
                  }
                >
                  {backupError}
                </Alert>
              )}

              <Grid
                container
                spacing={2}
                sx={{ mb: 3 }}
              >
                <Grid
                  size={{
                    xs: 12,
                    sm: 4,
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "#F5F7FA",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      Available Backups
                    </Typography>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                    >
                      {backups.length}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 4,
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "#F5F7FA",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      Last Backup
                    </Typography>

                    <Typography
                      fontWeight={700}
                    >
                      {latestBackup
                        ? formatBackupDate(
                            latestBackup.createdAt
                          )
                        : "No backup yet"}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 4,
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "#F5F7FA",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      Latest Backup Size
                    </Typography>

                    <Typography
                      fontWeight={700}
                    >
                      {latestBackup
                        ? formatFileSize(
                            latestBackup.size
                          )
                        : "-"}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ mb: 1.5 }}
              >
                Backup History
              </Typography>

              {backupLoading ? (
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <CircularProgress
                    size={20}
                  />

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Loading backups...
                  </Typography>
                </Stack>
              ) : backups.length === 0 ? (
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  No backups have been
                  created yet.
                </Typography>
              ) : (
                <Stack spacing={1.25}>
                  {backups.map(
                    (backup) => (
                      <Box
                        key={
                          backup.fileName
                        }
                        sx={{
                          p: 2,
                          border: "1px solid",
                          borderColor:
                            "divider",
                          borderRadius: 2,
                          display: "flex",
                          justifyContent:
                            "space-between",
                          alignItems:
                            "center",
                          gap: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body2"
                            fontWeight={700}
                          >
                            {
                              backup.fileName
                            }
                          </Typography>

                          <Typography
                            variant="caption"
                            color="text.secondary"
                          >
                            {formatBackupDate(
                              backup.createdAt
                            )}
                          </Typography>
                        </Box>

                        <Stack
  direction="row"
  spacing={1}
  alignItems="center"
>
  <Typography
    variant="body2"
    fontWeight={600}
  >
    {formatFileSize(
      backup.size
    )}
  </Typography>

  <Stack
  direction="row"
  spacing={1}
>
  <Button
    size="small"
    variant="outlined"
    onClick={() =>
      downloadBackup(backup.fileName)
    }
  >
    Download
  </Button>

  <Button
    size="small"
    color="error"
    variant="outlined"
    onClick={async () => {
      const confirmed =
        window.confirm(
          `Delete ${backup.fileName}?`
        );

      if (!confirmed) return;

      try {
        await deleteBackup(
          backup.fileName
        );

        const result =
          await fetchBackups();

        setBackups(
          result.data || []
        );
      } catch (error) {
        alert(
          error.message ||
            "Failed to delete backup"
        );
      }
    }}
  >
    Delete
  </Button>
</Stack>
</Stack>
                      </Box>
                    )
                  )}
                </Stack>
              )}

              <Alert
                severity="info"
                sx={{ mt: 2.5 }}
              >
                Restore is intentionally not
                enabled yet. Restoring a
                database can overwrite live
                customer and transaction data,
                so we will add confirmation
                and safety checks first.
              </Alert>
            </CardContent>
          </Card>
        </Grid>

        {/* SYSTEM INFORMATION */}
        <Grid
          size={{
            xs: 12,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <InfoOutlinedIcon
                  sx={{
                    color: "#0D3B66",
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  System Information
                </Typography>
              </Stack>

              <Divider sx={{ my: 2.5 }} />

              <Grid
                container
                spacing={3}
              >
                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Version
                  </Typography>

                  <Typography
                    fontWeight={600}
                  >
                    1.0.0
                  </Typography>
                </Grid>

                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Database
                  </Typography>

                  <Typography
                    fontWeight={600}
                  >
                    SQLite + Prisma
                  </Typography>
                </Grid>

                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Authentication
                  </Typography>

                  <Typography
                    fontWeight={600}
                  >
                    JWT
                  </Typography>
                </Grid>

                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Status
                  </Typography>

                  <Typography
                    fontWeight={600}
                  >
                    Development
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={3500}
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