import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import KeyIcon from "@mui/icons-material/Key";
import EditIcon from "@mui/icons-material/Edit";

import {
  createUser,
  getUsers,
  resetPassword,
  updateUser,
} from "../services/userApi";

const emptyCreateForm = {
  username: "",
  password: "",
  role: "CASHIER",
};

const emptyEditForm = {
  id: "",
  username: "",
  role: "CASHIER",
  isActive: true,
};

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [notification, setNotification] =
    useState("");

  const [createOpen, setCreateOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [passwordOpen, setPasswordOpen] =
    useState(false);

  const [createForm, setCreateForm] =
    useState(emptyCreateForm);

  const [editForm, setEditForm] =
    useState(emptyEditForm);

  const [selectedUser, setSelectedUser] =
    useState(null);

  const [newPassword, setNewPassword] =
    useState("");

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();

      setUsers(
        Array.isArray(data) ? data : []
      );
    } catch (loadError) {
      setError(
        loadError.message ||
          "Unable to load users."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreateSubmit = async (
    event
  ) => {
    event.preventDefault();

    try {
      const result = await createUser(
        createForm
      );

      setNotification(
        result.message ||
          "User created successfully."
      );

      setCreateOpen(false);
      setCreateForm(emptyCreateForm);

      await loadUsers();
    } catch (createError) {
      setError(
        createError.message ||
          "Unable to create user."
      );
    }
  };

  const handleOpenEdit = (user) => {
    setEditForm({
      id: user.id,
      username: user.username,
      role: user.role,
      isActive: user.isActive,
    });

    setEditOpen(true);
  };

  const handleEditSubmit = async (
    event
  ) => {
    event.preventDefault();

    try {
      const result = await updateUser(
        editForm.id,
        {
          username: editForm.username,
          role: editForm.role,
          isActive: editForm.isActive,
        }
      );

      setNotification(
        result.message ||
          "User updated successfully."
      );

      setEditOpen(false);

      await loadUsers();
    } catch (editError) {
      setError(
        editError.message ||
          "Unable to update user."
      );
    }
  };

  const handleOpenPassword = (user) => {
    setSelectedUser(user);
    setNewPassword("");
    setPasswordOpen(true);
  };

  const handlePasswordSubmit = async (
    event
  ) => {
    event.preventDefault();

    try {
      const result =
        await resetPassword(
          selectedUser.id,
          newPassword
        );

      setNotification(
        result.message ||
          "Password reset successfully."
      );

      setPasswordOpen(false);
      setSelectedUser(null);
      setNewPassword("");
    } catch (passwordError) {
      setError(
        passwordError.message ||
          "Unable to reset password."
      );
    }
  };

  return (
    <Box p={3}>
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
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
          >
            User Management
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Manage admin and cashier
            accounts.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            setCreateOpen(true)
          }
        >
          Add User
        </Button>
      </Stack>

      {error && (
        <Alert
          severity="error"
          sx={{ mb: 2 }}
          onClose={() =>
            setError("")
          }
        >
          {error}
        </Alert>
      )}

      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Username</b>
              </TableCell>

              <TableCell>
                <b>Role</b>
              </TableCell>

              <TableCell>
                <b>Status</b>
              </TableCell>

              <TableCell>
                <b>Created</b>
              </TableCell>

              <TableCell align="right">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                  sx={{ py: 4 }}
                >
                  Loading users...
                </TableCell>
              </TableRow>
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                  sx={{ py: 4 }}
                >
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.username}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={user.role}
                      color={
                        user.role === "ADMIN"
                          ? "primary"
                          : "default"
                      }
                      size="small"
                    />
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={
                        user.isActive
                          ? "Active"
                          : "Inactive"
                      }
                      color={
                        user.isActive
                          ? "success"
                          : "default"
                      }
                      size="small"
                    />
                  </TableCell>

                  <TableCell>
                    {user.createdAt
                      ? new Date(
                          user.createdAt
                        ).toLocaleDateString()
                      : "-"}
                  </TableCell>

                  <TableCell align="right">
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="flex-end"
                    >
                      <Button
                        size="small"
                        startIcon={
                          <EditIcon />
                        }
                        onClick={() =>
                          handleOpenEdit(
                            user
                          )
                        }
                      >
                        Edit
                      </Button>

                      <Button
                        size="small"
                        startIcon={
                          <KeyIcon />
                        }
                        onClick={() =>
                          handleOpenPassword(
                            user
                          )
                        }
                      >
                        Password
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={createOpen}
        onClose={() =>
          setCreateOpen(false)
        }
        fullWidth
        maxWidth="sm"
      >
        <form onSubmit={handleCreateSubmit}>
          <DialogTitle>
            Add User
          </DialogTitle>

          <DialogContent>
            <Stack
              spacing={2}
              sx={{ mt: 1 }}
            >
              <TextField
                label="Username"
                value={
                  createForm.username
                }
                onChange={(event) =>
                  setCreateForm(
                    (current) => ({
                      ...current,
                      username:
                        event.target
                          .value,
                    })
                  )
                }
                required
                fullWidth
              />

              <TextField
                label="Password"
                type="password"
                value={
                  createForm.password
                }
                onChange={(event) =>
                  setCreateForm(
                    (current) => ({
                      ...current,
                      password:
                        event.target
                          .value,
                    })
                  )
                }
                required
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>
                  Role
                </InputLabel>

                <Select
                  label="Role"
                  value={
                    createForm.role
                  }
                  onChange={(event) =>
                    setCreateForm(
                      (current) => ({
                        ...current,
                        role:
                          event.target
                            .value,
                      })
                    )
                  }
                >
                  <MenuItem value="CASHIER">
                    CASHIER
                  </MenuItem>

                  <MenuItem value="ADMIN">
                    ADMIN
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() =>
                setCreateOpen(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
            >
              Create User
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        open={editOpen}
        onClose={() =>
          setEditOpen(false)
        }
        fullWidth
        maxWidth="sm"
      >
        <form onSubmit={handleEditSubmit}>
          <DialogTitle>
            Edit User
          </DialogTitle>

          <DialogContent>
            <Stack
              spacing={2}
              sx={{ mt: 1 }}
            >
              <TextField
                label="Username"
                value={
                  editForm.username
                }
                onChange={(event) =>
                  setEditForm(
                    (current) => ({
                      ...current,
                      username:
                        event.target
                          .value,
                    })
                  )
                }
                required
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>
                  Role
                </InputLabel>

                <Select
                  label="Role"
                  value={editForm.role}
                  onChange={(event) =>
                    setEditForm(
                      (current) => ({
                        ...current,
                        role:
                          event.target
                            .value,
                      })
                    )
                  }
                >
                  <MenuItem value="CASHIER">
                    CASHIER
                  </MenuItem>

                  <MenuItem value="ADMIN">
                    ADMIN
                  </MenuItem>
                </Select>
              </FormControl>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    fontWeight={600}
                  >
                    Account Active
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Inactive users cannot
                    log in.
                  </Typography>
                </Box>

                <Switch
                  checked={
                    editForm.isActive
                  }
                  onChange={(event) =>
                    setEditForm(
                      (current) => ({
                        ...current,
                        isActive:
                          event.target
                            .checked,
                      })
                    )
                  }
                />
              </Stack>
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() =>
                setEditOpen(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
            >
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        open={passwordOpen}
        onClose={() =>
          setPasswordOpen(false)
        }
        fullWidth
        maxWidth="sm"
      >
        <form
          onSubmit={
            handlePasswordSubmit
          }
        >
          <DialogTitle>
            Reset Password
          </DialogTitle>

          <DialogContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              User:{" "}
              <b>
                {selectedUser?.username}
              </b>
            </Typography>

            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(event) =>
                setNewPassword(
                  event.target.value
                )
              }
              required
              fullWidth
            />
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() =>
                setPasswordOpen(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
            >
              Reset Password
            </Button>
          </DialogActions>
        </form>
      </Dialog>

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