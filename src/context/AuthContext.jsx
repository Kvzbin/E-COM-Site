import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 🟡 Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  // ✅ Signup: Save to users array + auto-login
  const signup = ({ name, email, password }) => {
    const newUser = { name, email, password };

    const existing = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = existing.find((u) => u.email === email);
    if (alreadyExists) throw new Error("User already exists");

    const updatedUsers = [...existing, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  // ✅ Login: Check email+password from saved users
  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error("Invalid credentials");

    localStorage.setItem("loggedInUser", JSON.stringify(found));
    setUser(found);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
