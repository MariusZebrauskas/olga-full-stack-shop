import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loadingDb, setLoadingDb] = useState(false);
  return (
    <LoadingContext.Provider value={[loadingDb, setLoadingDb]}>
        {children}
    </LoadingContext.Provider>
  );
};
