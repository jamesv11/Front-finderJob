import { ErrorMessage, useField } from "formik"
import { ComponentExtendStyle } from "../../interfaces/interface"


interface Props extends ComponentExtendStyle {
    label?: string,
    name: string,
    type?: string,
    placeholder?: string,
    [x: string]: any
}

export const InputForm = ({
    label, className, ...props
}: Props
) => {

    const [field] = useField(props);

    return <div className="my-1">
        <label htmlFor={props.id || props.name} className="block mb-2 text-sm font-medium text-gray-900">
            {label}
        </label>
        <input
            className={`${className ? className : "bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}`}
            {...field}
            {...props}
        />
        <ErrorMessage name={props.name} component="span" className="block text-xs font-medium text-rose-700 my-1 "/>
    </div>
}