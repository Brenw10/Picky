import React, { useContext, useState, createContext } from 'react';

export const UserTokenContext = createContext();

export default function ({ children }) {
  const [token, setToken] = useState();

  return (
    <UserTokenContext.Provider value={{ token, setToken }}>
      {children}
    </UserTokenContext.Provider>
  )
}

export function useUserToken() {
  return useContext(UserTokenContext);
}