/// <reference types="react" />
declare module "components/AuthContextState" {
    interface AuthContextState {
        isAuth: boolean;
        checked: boolean;
    }
    export default AuthContextState;
}
declare module "components/AuthContext" {
    import React from "react";
    import AuthContextState from "components/AuthContextState";
    export const initialState: AuthContextState;
    const AuthContext: React.Context<AuthContextState>;
    export default AuthContext;
}
declare module "components/AuthSubject" {
    import { Subject } from "rxjs";
    const AuthSubject: Subject<boolean>;
    export default AuthSubject;
}
declare module "components/AuthContextProvider" {
    import { ReactElement } from "react";
    interface AuthContextProviderProps {
        getStoredAuthValue?: Function;
        children: ReactElement | ReactElement[];
    }
    const AuthContextProvider: ({ getStoredAuthValue, children }: AuthContextProviderProps) => JSX.Element;
    export default AuthContextProvider;
}
declare module "components/ProtectedComponent" {
    import { ReactElement } from "react";
    interface ProtectedComponentProps {
        children: ReactElement | ReactElement[];
        fallbackComponent?: ReactElement | ReactElement[];
    }
    const ProtectedComponent: ({ children, fallbackComponent }: ProtectedComponentProps) => JSX.Element;
    export default ProtectedComponent;
}
declare module "components/ProtectedRoute" {
    import React from "react";
    import { RouteProps } from "react-router";
    interface ProtectedRouteProps extends RouteProps {
        redirectPath: string;
        component: any;
        loadingComponent?: React.ComponentType<any>;
    }
    const ProtectedRoute: ({ redirectPath, component: Component, loadingComponent, ...rest }: ProtectedRouteProps) => JSX.Element;
    export default ProtectedRoute;
}
declare module "components/useAuth" {
    import AuthContextState from "components/AuthContextState";
    const useAuth: () => AuthContextState;
    export default useAuth;
}
declare module "index" {
    export { default as AuthContext } from "components/AuthContext";
    export { default as AuthContextProvider } from "components/AuthContextProvider";
    export { default as AuthContextState } from "components/AuthContextState";
    export { default as AuthSubject } from "components/AuthSubject";
    export { default as ProtectedComponent } from "components/ProtectedComponent";
    export { default as ProtectedRoute } from "components/ProtectedRoute";
    export { default as useAuth } from "components/useAuth";
}
