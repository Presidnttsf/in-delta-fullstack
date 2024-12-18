// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticated } from "../components/login/auth"

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();
    return isAuthenticated ? children : <Navigate to={"/"} />

};

export default PrivateRoute;
