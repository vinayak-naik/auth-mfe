import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignupPage from '../pages/signup';
import LoginPage from '../pages/login';

const UnAuthenticatedRoutes = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      <Route path="/signup" Component={SignupPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
    // </BrowserRouter>
  );
};
export default UnAuthenticatedRoutes;
