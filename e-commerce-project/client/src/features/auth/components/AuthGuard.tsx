import React, { type ReactNode } from "react";
import { useAuth } from "../pages/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }: { children: ReactNode }) {
  // check if the user is authenticated
  // if yes, return the appropriate page
  // if not, redirect them to login page

  const { user } = useAuth();

  // lots of things you can do here
  // check role and permission (e.g. admin access)
  // if user is already logged, redirect to home page

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
}
