import React from 'react';

import { Main } from './main';

export const App = () => {
  React.useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    console.log('@@ token: ', token);
  }, []);

  return <Main />;
};

export default App;
