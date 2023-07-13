import React from 'react';
import { useTheme } from '@mui/material/styles';

export const Main = () => {
  const theme = useTheme();

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* <AppRoutes /> */}
      <div>test</div>
    </div>
  );
};
