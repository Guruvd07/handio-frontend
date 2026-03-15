import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import SearchProviders from "./pages/SearchProviders";
import ProviderProfile from "./pages/ProviderProfile";
import ProviderDashboard from "./pages/ProviderDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CreateProviderProfile from "./pages/CreateProviderProfile";
import CustomerBookings from "./pages/CustomerBookings";
import UploadPortfolio from "./pages/UploadPortfolio";
import Chat from "./pages/Chat";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./landing/LandingPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function AppLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* ── LANDING ── */}
        <Route path="/" element={<LandingPage />} />

        {/* ── PUBLIC ── */}
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search"   element={<SearchProviders />} />
        <Route path="/provider/:id" element={<ProviderProfile />} />

        {/* ── CUSTOMER ── */}
        <Route
          path="/customer/dashboard"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute role="customer">
              <CustomerBookings />
            </ProtectedRoute>
          }
        />
        {/* keep old path working too */}
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute role="customer">
              <CustomerBookings />
            </ProtectedRoute>
          }
        />
        {/* ── SHARED — both customer and provider ── */}
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        {/* ── PROVIDER ── */}
        <Route
          path="/provider/dashboard"
          element={
            <ProtectedRoute role="provider">
              <ProviderDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-provider-profile"
          element={
            <ProtectedRoute role="provider">
              <CreateProviderProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload-portfolio"
          element={
            <ProtectedRoute role="provider">
              <UploadPortfolio />
            </ProtectedRoute>
          }
        />

        {/* ── ADMIN ── */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;