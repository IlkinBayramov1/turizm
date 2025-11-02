import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Tours from "../pages/Tours/Tours";
import Reservations from "../pages/Reservations/Reservations";
import Settings from "../pages/Settings/Settings";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AdminRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="tours" element={<Tours />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
