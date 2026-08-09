import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext(null);

const TOKEN_KEY = "dsrp-auth-token";
const USER_KEY = "dsrp-auth-user";

function loadStoredUser() {
  try {
    const savedUser = localStorage.getItem(USER_KEY);

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  } catch (error) {
    console.error(
      "Unable to load stored user:",
      error
    );

    return null;
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() =>
    localStorage.getItem(TOKEN_KEY)
  );

  const [user, setUser] = useState(
    loadStoredUser
  );

  const [isLoggingIn, setIsLoggingIn] =
    useState(false);

  const login = useCallback(
    async ({ username, password }) => {
      const normalizedUsername = String(
        username || ""
      ).trim();

      const normalizedPassword = String(
        password || ""
      );

      if (
        !normalizedUsername ||
        !normalizedPassword
      ) {
        return {
          success: false,
          message:
            "Username and password are required.",
        };
      }

      setIsLoggingIn(true);

      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              username: normalizedUsername,
              password: normalizedPassword,
            }),
          }
        );

        let result = null;

        try {
          result = await response.json();
        } catch {
          result = null;
        }

        if (!response.ok || !result?.success) {
          return {
            success: false,
            message:
              result?.message ||
              "Unable to log in.",
          };
        }

        localStorage.setItem(
          TOKEN_KEY,
          result.token
        );

        localStorage.setItem(
          USER_KEY,
          JSON.stringify(result.user)
        );

        setToken(result.token);
        setUser(result.user);

        return {
          success: true,
          message: "Login successful.",
          user: result.user,
        };
      } catch (error) {
        console.error("Login request failed:", error);

        return {
          success: false,
          message:
            "Unable to connect to the server.",
        };
      } finally {
        setIsLoggingIn(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      token,
      user,
      isLoggingIn,
      isAuthenticated: Boolean(
        token && user
      ),
      isAdmin: user?.role === "ADMIN",
      isCashier: user?.role === "CASHIER",
      login,
      logout,
    }),
    [
      token,
      user,
      isLoggingIn,
      login,
      logout,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}

export function getStoredAuthToken() {
  return localStorage.getItem(TOKEN_KEY);
}