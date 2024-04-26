import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const value = { name: "TArek" };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
