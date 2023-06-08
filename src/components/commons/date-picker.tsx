import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id || props.name} className="block mb-2 text-sm font-medium text-gray-900">
                Fecha de expiracion
            </label>
            <DatePicker
                {...field}
                {...props}
                className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
            />
        </div>
    );
};