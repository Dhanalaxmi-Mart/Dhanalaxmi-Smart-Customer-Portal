const bcrypt = require("bcryptjs");
const prisma = require("../lib/prisma");

const VALID_ROLES = [
  "ADMIN",
  "CASHIER",
];

async function getUsers(req, res) {
  try {
    const users =
      await prisma.user.findMany({
        select: {
          id: true,
          username: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

    return res.json(users);
  } catch (error) {
    console.error(
      "Get users error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to load users.",
    });
  }
}

async function createUser(req, res) {
  try {
    const username = String(
      req.body?.username || ""
    ).trim();

    const password = String(
      req.body?.password || ""
    );

    const role = String(
      req.body?.role || "CASHIER"
    ).toUpperCase();

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Username and password are required.",
      });
    }

    if (username.length < 3) {
      return res.status(400).json({
        success: false,
        message:
          "Username must contain at least 3 characters.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 6 characters.",
      });
    }

    if (!VALID_ROLES.includes(role)) {
      return res.status(400).json({
        success: false,
        message:
          "Role must be ADMIN or CASHIER.",
      });
    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          username,
        },
      });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          "This username already exists.",
      });
    }

    const passwordHash =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await prisma.user.create({
        data: {
          username,
          password: passwordHash,
          role,
          isActive: true,
        },
        select: {
          id: true,
          username: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });

    return res.status(201).json({
      success: true,
      message:
        "User created successfully.",
      user,
    });
  } catch (error) {
    console.error(
      "Create user error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to create user.",
    });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;

    const username = String(
      req.body?.username || ""
    ).trim();

    const role = String(
      req.body?.role || ""
    ).toUpperCase();

    const isActive =
      req.body?.isActive;

    if (!username) {
      return res.status(400).json({
        success: false,
        message:
          "Username is required.",
      });
    }

    if (!VALID_ROLES.includes(role)) {
      return res.status(400).json({
        success: false,
        message:
          "Role must be ADMIN or CASHIER.",
      });
    }

    if (
      typeof isActive !== "boolean"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "isActive must be true or false.",
      });
    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          id,
        },
      });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message:
          "User could not be found.",
      });
    }

    /*
     * Prevent the currently logged-in
     * admin from disabling their own
     * account.
     */
    if (
      req.user.id === id &&
      isActive === false
    ) {
      return res.status(400).json({
        success: false,
        message:
          "You cannot deactivate your own account.",
      });
    }

    const usernameOwner =
      await prisma.user.findUnique({
        where: {
          username,
        },
      });

    if (
      usernameOwner &&
      usernameOwner.id !== id
    ) {
      return res.status(409).json({
        success: false,
        message:
          "This username already exists.",
      });
    }

    const user =
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          username,
          role,
          isActive,
        },
        select: {
          id: true,
          username: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });

    return res.json({
      success: true,
      message:
        "User updated successfully.",
      user,
    });
  } catch (error) {
    console.error(
      "Update user error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to update user.",
    });
  }
}

async function resetUserPassword(
  req,
  res
) {
  try {
    const { id } = req.params;

    const password = String(
      req.body?.password || ""
    );

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 6 characters.",
      });
    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          id,
        },
      });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message:
          "User could not be found.",
      });
    }

    const passwordHash =
      await bcrypt.hash(
        password,
        10
      );

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: passwordHash,
      },
    });

    return res.json({
      success: true,
      message:
        "Password reset successfully.",
    });
  } catch (error) {
    console.error(
      "Reset password error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to reset password.",
    });
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  resetUserPassword,
};