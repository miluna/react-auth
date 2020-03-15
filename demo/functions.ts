import { AuthSubject } from "../src";

export const getStoredValue = () => {
    return new Promise(resolve => {
        const value = sessionStorage.getItem("Auth");
        resolve(value === "true");
    });
};

export const login = () => {
    sessionStorage.setItem("Auth", "true");
    AuthSubject.next(true);
};

export const logout = () => {
    sessionStorage.setItem("Auth", "false");
    AuthSubject.next(false);
};
