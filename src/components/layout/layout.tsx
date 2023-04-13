import { ReactElement } from "react";

export interface layoutProps {
    children?: ReactElement | ReactElement[];
}


export const Layout = ({ children }: layoutProps) => {
    return <div className="container mx-auto">
        {children}
    </div>
}