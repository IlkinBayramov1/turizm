import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { admin } = useContext(AuthContext);

  // Əgər admin login olmayıbsa login səhifəsinə yönləndir
  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  // Əks halda qorunan komponentləri göstər
  return children;
}
