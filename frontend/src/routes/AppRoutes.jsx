import Analytics from "../pages/Analytics";
import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../components/dashboard/Dashboard";
import CustomerPage from "../components/customer/CustomerPage";
import CustomerProfile from "../pages/CustomerProfile";
import Billing from "../pages/Billing";
import Loyalty from "../pages/Loyalty";



function Settings() {
  return <div>Settings Page</div>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="customers" element={<CustomerPage />} />

        <Route
          path="customers/:customerId"
          element={<CustomerProfile />}
        />
<Route path="billing" element={<Billing />} />
        <Route path="loyalty" element={<Loyalty />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}