import { CustomButton } from "../../commons/custom-button";
import { FormBase } from "../../commons/form-base"
import { InputForm } from "../../commons/input-form";
import * as Yup from "yup";
import { useState } from "react";

let schema = Yup.object({
    email: Yup.string().email("Email invalido.").required("Requerido."),
    password: Yup.string()
        .min(6, "Debe tener al menos seis caracteres")
        .required("Requerido"),
});


export const SignUpForm = () => {

    const [generalErrorState, setGeneralErrorState] = useState<boolean>(false);

    const formContent = (
        <>
            <InputForm
                label="Email"
                name="email"
                type="email"
                placeholder="Ingrese su email..."
            />
            <InputForm
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Ingrese su contraseña..."
            />
            {generalErrorState && (
                <span className="block text-sm font-medium text-rose-700 text-right">
                    Credenciales incorrectas.
                </span>
            )}
            <div className="flex justify-center items-center">
                <CustomButton
                    type="submit"
                    content="Registrar"
                    className="mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                />
            </div>

        </>
    );

    const onSubmit = (values: { [key: string]: any }) => {
        setGeneralErrorState(true);
        const user = {
            name: "James",
            email: values.email,
            id: "",
        };





        console.log(values);

    };

    

    return (<>

        <FormBase initialValues={{
            email: "",
            password: "",
        }}
            yupSchema={schema}
            children={formContent}
            onSubmit={onSubmit}
        />
    </>)
}