import { ReactElement } from "react";
interface ProtectedComponentProps {
    children: ReactElement | ReactElement[];
    fallbackComponent?: ReactElement | ReactElement[];
}
declare const ProtectedComponent: ({ children, fallbackComponent }: ProtectedComponentProps) => JSX.Element;
export default ProtectedComponent;
