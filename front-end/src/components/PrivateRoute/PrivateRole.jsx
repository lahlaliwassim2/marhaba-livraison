import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRole= (params) => {
  return localStorage.getItem("role") === params.role ? (
    <Outlet />
  ) : (
    <Navigate to="login" />
  );
};

export default PrivateRole ;
