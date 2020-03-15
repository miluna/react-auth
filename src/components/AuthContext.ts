import React from "react";
import AuthContextState from "./AuthContextState";

export const initialState: AuthContextState = {
  isAuth: false,
  checked: false
};

const AuthContext = React.createContext<AuthContextState>(initialState);

export default AuthContext;
