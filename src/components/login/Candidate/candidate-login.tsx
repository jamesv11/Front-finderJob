import { Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { CustomButton } from "../../commons/custom-button";
import { FormBase } from "../../commons/form-base";
import { InputAreaForm } from "../../commons/input-area-form";
import { InputForm } from "../../commons/input-form";

export interface formProps {
    className?: string;
}

let schema = Yup.object({
    name: Yup.string().required("Requerido"),
    description: Yup.string().required("Requerido"),
    nit: Yup.string().required("Requerido"),
    address: Yup.string().required("Requerido"),
    phone: Yup.string().required("Requerido"),
    email: Yup.string().required("Requerido"),
    password: Yup.string().required("Requerido"),

});


export interface FormCandidate {
    name: string,
    description: string,
    nit: string,
    address: string,
    phone: string,
    email: string,
    password: string
}

export const CandidateLogin = ({ className }: formProps) => {

    const [initialValues, setInititalValues] = useState<FormCandidate>({ name: '', description: '', nit: '', address: '', phone: '', email: '', password: '' });

    const formContent = (
        <>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Nombre" type="text" name="name" />
                <InputForm label="Identificación" type="text" name="nit" />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Dirección" type="text" name="address" />
                <InputForm label="Telefono" type="text" name="phone" />
            </div>
            <div>
                <InputForm label="Email" type="email" name="email" />
                <InputForm label="Contraseña" type="password" name="password" />
                <InputForm
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirme su contraseña..."
                />
                <InputAreaForm label="Descripción" name="description" placeholder="Que buscas?..." />
            </div>
            <div className="flex justify-center items-center">
                <CustomButton
                    type="submit"
                    content="Registrarse"
                    className="mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                />
            </div>

        </>
    )

    const onSubmit = (values: { [key: string]: any }) => {
        console.log(values);

    };


    return <div>
        <FormBase initialValues={initialValues}
            yupSchema={schema}
            children={formContent}
            onSubmit={onSubmit}
        />
    </div>
}

