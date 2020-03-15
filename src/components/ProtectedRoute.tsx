import React, { useContext } from "react";
import {Redirect, Route, RouteComponentProps, RouteProps} from "react-router";
import AuthContext from "./AuthContext";

interface ProtectedRouteProps extends RouteProps {
  redirectPath: string;
  component: any;
  loadingComponent?: React.ComponentType<any>;
}

const ProtectedRoute = ({ redirectPath, component: Component, loadingComponent, ...rest }: ProtectedRouteProps) => {
  const { isAuth, checked } = useContext(AuthContext);

  const render = (props: RouteComponentProps<any>) => {
    if (checked) {
      if (isAuth) return <Component {...props} />;
      else return <Redirect to={redirectPath} />;
    } else {
      if (loadingComponent) return loadingComponent;
      else return <React.Fragment />;
    }
  };

  return <Route {...rest} render={render} />;
};

export default ProtectedRoute;
