import React from "react";
import { useAuth } from "@site/src/contexts/AuthContext";
import { Redirect } from "@docusaurus/router";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  if (!user.email.endsWith("@iiit-bh.ac.in")) {
    return <Redirect to="/login" />;
  }

  return children;
}
