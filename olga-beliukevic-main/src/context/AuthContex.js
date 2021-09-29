import React, { useState, createContext } from 'react';

export const CurrenPerson = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  return (
    <CurrenPerson.Provider value={[loggedIn, setLoggedIn]}>
      <>{children}</>
    </CurrenPerson.Provider>
  );
};
