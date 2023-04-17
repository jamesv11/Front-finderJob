import { ReactElement } from "react";

export interface cardProps {
    title: string,
    description:string,
    children?: ReactElement | ReactElement[];
    className?: string;
}
export const Card = ({title, description, children , className}:cardProps) => {
    return <div className="w-max rounded overflow-hidden shadow-lg ">
    <div className={`${className} px-10 py-6`}>
      <div className="font-medium text-3xl mb-2">{title}</div>
      <p className="text-gray-700 text-base my-1">
        {description}
      </p>
      {children}
    </div>
  </div>
}