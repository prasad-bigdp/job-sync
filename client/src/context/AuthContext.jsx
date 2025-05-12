import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getInitialAuth = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    let userId = null;
    if (role === "employer") {
      userId = localStorage.getItem("EmployerId");
    } else if (role === "user") {
      userId = localStorage.getItem("UserId");
    }

    return { token, userId, role };
  };

  const [auth, setAuth] = useState(getInitialAuth);

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, userId: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
