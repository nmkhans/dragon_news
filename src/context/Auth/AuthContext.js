import { createContext, use } from "react";

const AuthContext = createContext(null);

export default AuthContext;

export const useAuthContext = () => {
  return use(AuthContext);
};
