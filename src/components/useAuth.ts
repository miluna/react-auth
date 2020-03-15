import { useContext } from "react";
import AuthContext from "./AuthContext";
import AuthContextState from "./AuthContextState";

const useAuth = (): AuthContextState => {
  return useContext(AuthContext);
};

export default useAuth;
