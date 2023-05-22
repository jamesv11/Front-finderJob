import { ReactElement, useState } from "react";

export interface TabsProps {
    options?: string[],
    children?: ReactElement[];
    className?: string;
}

export const Tabs = ({ children, className, options }: TabsProps) => {

    const [currentTab, setCurrentTab] = useState(0)

    const onTab = (position: number) => {
        setCurrentTab(position)
    }

    return <>
        <div>
            <div className="w-full">
                Como...
                <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">

                    {options?.map((option, index) => (
                        <li onClick={() => onTab(index)} className={`${currentTab === index ? "bg-blue-700" : ""} -mb-px mr-2 last:mr-0 flex-auto text-center border border-gray-700 mt-2.5 bg-blue-400 text-white font-medium py-2 px-4 rounded cursor-pointer `} key={option}>
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {children && children.map((child, index) => (
                    <div className={currentTab === index ? "block" : "hidden"}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    </>
}