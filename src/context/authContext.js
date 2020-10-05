import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(null);
  const [isAuth, setAuth] = useState(true);
  const [userId, setUserId] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        userId,
        setUserId,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
