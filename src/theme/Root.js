import React from "react";
import { AuthContextProvider } from "@site/src/contexts/AuthContext";
import ProtectedRoute from "@site/src/components/ProtectedRoute";
import { useLocation } from "@docusaurus/router";

export default function Root({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <AuthContextProvider>
      {isLoginPage ? children : <ProtectedRoute>{children}</ProtectedRoute>}
    </AuthContextProvider>
  );
}
