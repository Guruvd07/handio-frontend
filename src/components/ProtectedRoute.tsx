import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  role?: string;
}

function ProtectedRoute({ children, role }: Props) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // 🔒 Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 🔒 Role mismatch
  if (role && (!userRole || userRole !== role)) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
