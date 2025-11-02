import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedAdmin = localStorage.getItem("admin");
    if (token && storedAdmin) setAdmin(JSON.parse(storedAdmin));
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("admin", JSON.stringify(data));
    setAdmin(data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
