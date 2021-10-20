import React, { Suspense } from 'react';
import './App.less';
import Routes from './router/index';
import { StoreProvider } from './stores/index';
const App = () => {
  return (
    <StoreProvider>
      <Suspense fallback={<div>Loading</div>}>
        <Routes />
      </Suspense>
    </StoreProvider>
  );
};

export default App;
