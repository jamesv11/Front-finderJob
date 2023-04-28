import { ReactElement } from "react";
import { Navbar } from "../navbar/navbar";

export interface layoutProps {
    children?: ReactElement | ReactElement[];
}


export const Layout = ({ children }: layoutProps) => {
    return <div className="container mx-auto bg-gray-200">
        {children}
    </div>
}