import React, { useContext, useState, createContext } from 'react';

export const AlertContext = createContext();

export default function ({ children }) {
  const [content, setContent] = useState();

  return (
    <AlertContext.Provider value={{ content, setContent }}>
      {children}
    </AlertContext.Provider>
  )
}

export function useAlert() {
  return useContext(AlertContext);
}