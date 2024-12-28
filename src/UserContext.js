// src/UserContext.js
import React, { createContext, useState } from "react";

// Create a Context
export const UserContext = createContext();

// Create a Provider Component
export const UserProvider = ({ children }) => {
  const [person, setPerson] = useState(null); // State to store user data
  const [token, setToken] = useState(null);  // Authentication token

  return (
    <UserContext.Provider value={{ person, setPerson, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
