import { useLocalStore } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import createStores from './configStore';

export type Stores = ReturnType<typeof createStores>;
const storeContext = React.createContext<Stores | null>(null);

export const StoreProvider = ({ children }: { children: any }) => {
  const stores = useLocalStore(createStores);
  return (
    <storeContext.Provider value={stores}>{children}</storeContext.Provider>
  );
};

const useStores = () => {
  const stores = useContext(storeContext);
  if (!stores) {
    throw new Error('useStores must be used within a StoreProvider component!');
  }
  return stores;
};

export default useStores;
