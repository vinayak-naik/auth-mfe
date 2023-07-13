import React from 'react';
import AuthenticatedRoutes from './authenticatedRoutes';
import UnAuthenticatedRoutes from './unauthenticatedRoutes';

export const Routes = (props) => {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return <AuthenticatedRoutes />;
  }
  return <UnAuthenticatedRoutes />;
};
