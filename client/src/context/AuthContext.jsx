import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, userId: null, role: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    let userId = null;

    if (role === "employer") {
      userId = localStorage.getItem("EmployerId");
    } else if (role === "user") {
      userId = localStorage.getItem("UserId");
    }

    setAuth({ token, userId, role });
    setLoading(false);
    console.log("Auth from localStorage (init):", { token, userId, role });
  }, []);

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, userId: null, role: null });
  };

  useEffect(() => {
    if (!loading) {
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        localStorage.setItem("role", auth.role);
        if (auth.role === "employer") {
          localStorage.setItem("EmployerId", auth.userId);
        } else if (auth.role === "user") {
          localStorage.setItem("UserId", auth.userId);
        }
      } else {
        localStorage.clear();
      }
    }
  }, [auth, loading]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);