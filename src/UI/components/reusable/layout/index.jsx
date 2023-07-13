import { Container } from '@mui/material';
import React from 'react';

const AppContainer = (props) => {
  const { children } = props;
  return <Container sx={{ height: '100vh' }}>{children}</Container>;
};

export { AppContainer };
