import React from 'react';
import { UserProvider } from './context/loginContext';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className="base__container-main">
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
}

export default App;
