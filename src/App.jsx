import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";

const ProtectedRoute = ({ role, children }) => {
  const { user } = useAuth();
  if (!user || user.role !== role) return <Navigate to="/login" />;
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        } />

        <Route path="/login" element={<Login />} />

        <Route path="/vendor" element={
          <ProtectedRoute role="vendor">
            <VendorDashboard />
          </ProtectedRoute>
        } />

        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}
