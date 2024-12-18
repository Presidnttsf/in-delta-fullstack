// src/UserContext.js
import React, { createContext, useState } from "react";

// Create a Context
export const UserContext = createContext();

// Create a Provider Component
export const UserProvider = ({ children }) => {
  const [person, setPerson] = useState(null); // State to store user data

  return (
    <UserContext.Provider value={{ person, setPerson }}>
      {children}
    </UserContext.Provider>
  );
};
