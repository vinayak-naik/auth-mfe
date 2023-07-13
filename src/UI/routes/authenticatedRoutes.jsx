import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UpdateProfilePage from '../pages/updateProfile';

const AuthenticatedRoutes = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/profile" Component={UpdateProfilePage} />
      <Route path="*" element={<Navigate to="/auth/profile" replace />} />
    </Routes>
    // </BrowserRouter>
  );
};
export default AuthenticatedRoutes;
