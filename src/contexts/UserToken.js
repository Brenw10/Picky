import React, { useContext, createContext, useReducer } from 'react';
import UserToken, { ACTIONS as TOKEN_ACTIONS } from '../reducers/UserToken';

export const UserTokenContext = createContext();

export default function ({ children }) {
  const [token, dispatchToken] = useReducer(UserToken);

  return (
    <UserTokenContext.Provider value={{ token, dispatchToken, TOKEN_ACTIONS }}>
      {children}
    </UserTokenContext.Provider>
  )
}

export function useUserToken() {
  return useContext(UserTokenContext);
}