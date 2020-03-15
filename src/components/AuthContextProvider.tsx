import React, { ReactElement, useEffect, useState } from "react";
import AuthContextState from "./AuthContextState";
import AuthContext, { initialState } from "./AuthContext";
import AuthSubject from "./AuthSubject";

interface AuthContextProviderProps {
  getStoredAuthValue?: Function;
  children: ReactElement | ReactElement[];
}

const AuthContextProvider = ({ getStoredAuthValue, children }: AuthContextProviderProps) => {
  const [isAuth, setAuth] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const subscription = AuthSubject.subscribe(value => {
      setAuth(value);
    });
    if (getStoredAuthValue) {
      const result = getStoredAuthValue();
      Promise.resolve(result).then(value => {
        setAuth(value);
        setChecked(true);
      });
    } else {
      setChecked(true);
    }
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ isAuth, checked }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
