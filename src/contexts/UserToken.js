import React, { useContext, createContext, useReducer, useEffect } from 'react';
import UserToken, { ACTIONS as TOKEN_ACTIONS } from '../reducers/UserToken';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserTokenContext = createContext();

export default function ({ children }) {
  const [token, dispatchToken] = useReducer(UserToken);

  useEffect(() => {
    AsyncStorage.getItem('@token')
      .then(token => token && dispatchToken({ type: TOKEN_ACTIONS.INSERT, payload: token }));
  }, []);

  return (
    <UserTokenContext.Provider value={{ token, dispatchToken, TOKEN_ACTIONS }}>
      {children}
    </UserTokenContext.Provider>
  )
}

export function useUserToken() {
  return useContext(UserTokenContext);
}