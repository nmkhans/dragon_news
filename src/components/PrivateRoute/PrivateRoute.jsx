import React from "react";
import { useAuthContext } from "../../context/Auth/AuthContext";
import { Navigate, useLocation } from "react-router";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;
