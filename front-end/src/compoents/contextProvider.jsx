// contextProvider.js
import React, { createContext } from 'react';

const UserContext = createContext();

const ContextProvider = ({ children, value }) => { // Destructure 'value' here
  // You can define your state and functions here
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, ContextProvider };
