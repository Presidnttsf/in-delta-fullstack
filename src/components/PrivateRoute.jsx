// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './login/auth';

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? (
        children
    ) : (
        <Navigate to="/" replace />
    );
};

export default PrivateRoute;
