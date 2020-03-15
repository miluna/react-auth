import React, {ReactElement, ReactNode, useContext} from "react";
import AuthContext from "./AuthContext";

interface ProtectedComponentProps {
  children: ReactNode | ReactElement | ReactElement[];
  fallbackComponent?: ReactNode | ReactElement | ReactElement[];
}

const ProtectedComponent = ({ children, fallbackComponent }: ProtectedComponentProps) => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth) return children;
  if (fallbackComponent) return fallbackComponent;
  return <React.Fragment />;
};

export default ProtectedComponent;
