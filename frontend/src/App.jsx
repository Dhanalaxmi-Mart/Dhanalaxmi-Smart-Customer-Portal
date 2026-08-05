import AppRoutes from "./routes/AppRoutes";
import { CustomerProvider } from "./context/CustomerContext";

export default function App() {
  return (
    <CustomerProvider>
      <AppRoutes />
    </CustomerProvider>
  );
}