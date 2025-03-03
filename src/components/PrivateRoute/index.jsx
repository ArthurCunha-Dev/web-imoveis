import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("user");

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
