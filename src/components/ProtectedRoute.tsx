import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  role?: string;
}

function ProtectedRoute({ children, role }: Props) {

  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // If user is not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If role is required and does not match
  if (role && userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;