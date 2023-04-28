import { ErrorMessage, useField } from "formik"
import { ComponentExtendStyle } from "../../interfaces/interface"


interface Props extends ComponentExtendStyle {
    label?: string,
    name: string,
    type?: string,
    placeholder?: string,
    [x: string]: any
}

export const InputAreaForm = ({
    label, className, ...props
}: Props
) => {

    const [field] = useField(props);

    return <div>
        <label htmlFor={props.id || props.name} className="block mb-2 text-sm font-medium text-gray-900">
            {label}
        </label>
        <textarea
            rows={4} 
            className={`${className ? className : "block p-2.5 w-full text-sm text-gray-900 bg-zinc-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
            {...field}
            {...props}
        />
        <ErrorMessage name={props.name} component="span" className="block text-xs font-medium text-rose-700 my-1" />
    </div>
}