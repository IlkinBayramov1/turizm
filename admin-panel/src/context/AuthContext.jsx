import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // səhifə yenilənəndə admin məlumatını bərpa et
  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (token && storedAdmin) setAdmin(JSON.parse(storedAdmin));
  }, [token]);

  // login funksiyası
  const login = (data) => {
    setAdmin(data);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    localStorage.setItem("admin", JSON.stringify(data));
  };

  // logout funksiyası
  const logout = () => {
    setAdmin(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{ admin, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
