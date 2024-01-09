// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/SignIn" replace />
  );
};

export default ProtectedRoute;
