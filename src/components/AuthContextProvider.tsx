import React, { ReactElement, useEffect, useState } from "react";
import AuthContextState from "./AuthContextState";
import AuthContext, { initialState } from "./AuthContext";
import AuthSubject from "./AuthSubject";

interface AuthContextProviderProps {
  getStoredAuthValue?: Function;
  children: ReactElement | ReactElement[];
}

const AuthContextProvider = ({ getStoredAuthValue, children }: AuthContextProviderProps) => {
  const [state, setState] = useState<AuthContextState>(initialState);

  useEffect(() => {
    const subscription = AuthSubject.subscribe(value => {
      setState({ ...state, isAuth: value });
    });
    if (getStoredAuthValue) {
      const result = getStoredAuthValue();
      Promise.resolve(result).then(value => setState({ isAuth: value, checked: true }));
    } else {
      setState({ ...state, checked: true });
    }
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
