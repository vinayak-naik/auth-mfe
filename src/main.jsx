import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Routes } from './UI/routes';

export const Main = (props) => {
  const { isAuthenticated } = props;
  useTheme();

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgb(232 237 240)',
        height: '100vh',
      }}
    >
      <Routes isAuthenticated={isAuthenticated} />
    </div>
  );
};
