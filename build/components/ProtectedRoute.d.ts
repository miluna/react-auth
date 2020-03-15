import React from "react";
import { RouteProps } from "react-router";
interface ProtectedRouteProps extends RouteProps {
    redirectPath: string;
    component: any;
    loadingComponent?: React.ComponentType<any>;
}
declare const ProtectedRoute: ({ redirectPath, component: Component, loadingComponent, ...rest }: ProtectedRouteProps) => JSX.Element;
export default ProtectedRoute;
