import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CustomerPortal from "../pages/CustomerPortal";
import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../components/dashboard/Dashboard";
import CustomerPage from "../components/customer/CustomerPage";

import CustomerProfile from "../pages/CustomerProfile";
import Billing from "../pages/Billing";
import Loyalty from "../pages/Loyalty";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Offers from "../pages/Offers";
import Login from "../pages/Login";
import UserManagement from "../pages/UserManagement";

import PrivateRoute from "./PrivateRoute";

import {
  CustomerProvider,
} from "../context/CustomerContext";

import {
  useAuth,
} from "../context/AuthContext";

/*
 * ADMIN-only frontend protection.
 *
 * Backend permissions remain the real
 * security layer. This prevents CASHIER
 * users from opening admin pages in UI.
 */
function AdminRoute({ children }) {
  const { user } = useAuth();

  if (user?.role !== "ADMIN") {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route
        path="/login"
        element={<Login />}
      />
<Route
  path="/portal"
  element={<CustomerPortal />}
/>
      {/* Authenticated Application */}
      <Route
        element={
          <PrivateRoute>
            <CustomerProvider>
              <MainLayout />
            </CustomerProvider>
          </PrivateRoute>
        }
      >
        {/* ADMIN + CASHIER */}
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="customers"
          element={<CustomerPage />}
        />

        <Route
          path="customers/:customerId"
          element={<CustomerProfile />}
        />

        <Route
          path="billing"
          element={<Billing />}
        />

        <Route
          path="loyalty"
          element={<Loyalty />}
        />
<Route
  path="offers"
  element={
    <AdminRoute>
      <Offers />
    </AdminRoute>
  }
/>
        {/* ADMIN ONLY */}
        <Route
          path="analytics"
          element={
            <AdminRoute>
              <Analytics />
            </AdminRoute>
          }
        />

        <Route
          path="settings"
          element={
            <AdminRoute>
              <Settings />
            </AdminRoute>
          }
        />

        <Route
          path="settings/users"
          element={
            <AdminRoute>
              <UserManagement />
            </AdminRoute>
          }
        />
      </Route>

      {/* Unknown Route */}
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
}