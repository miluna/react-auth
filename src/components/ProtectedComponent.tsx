import React, { ReactElement, useContext } from "react";
import AuthContext from "./AuthContext";

interface ProtectedComponentProps {
  children: ReactElement | ReactElement[];
  fallbackComponent?: ReactElement | ReactElement[];
}

const ProtectedComponent = ({ children, fallbackComponent }: ProtectedComponentProps) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <React.Fragment>
      {isAuth 
        ? children
        : fallbackComponent ? fallbackComponent : <React.Fragment />
       }
    </React.Fragment>
  )
};

export default ProtectedComponent;
