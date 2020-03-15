import { ReactElement } from "react";
interface AuthContextProviderProps {
    getStoredAuthValue?: Function;
    children: ReactElement | ReactElement[];
}
declare const AuthContextProvider: ({ getStoredAuthValue, children }: AuthContextProviderProps) => JSX.Element;
export default AuthContextProvider;
