import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { auth, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!auth.token || auth.role !== requiredRole) {
    alert("You are not authorized to view this page cuz you are not logged in.");
    return <Navigate to="/EmployerLogin" replace />;
  }

  return children;
};
