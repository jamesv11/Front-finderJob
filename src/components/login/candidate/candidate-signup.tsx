import { useState } from "react";
import * as Yup from "yup";
import { CustomButton } from "../../commons/custom-button";
import { FormBase } from "../../commons/form-base";
import { InputAreaForm } from "../../commons/input-area-form";
import { InputForm } from "../../commons/input-form";
import loginService from "../../../services/login.service";

export interface formProps {
  className?: string;
  edit?: boolean;
}

let schema = Yup.object({
  firstName: Yup.string().required("Requerido"),
  firstLastName: Yup.string().required("Requerido"),
  nit: Yup.string().required("Requerido"),
  address: Yup.string().required("Requerido"),
  phone: Yup.string().required("Requerido"),
  email: Yup.string().email("Email invalido.").required("Requerido"),
  password: Yup.string().required("Requerido"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no son iguales.")
    .required("Requerido"),
});

export interface FormCandidate {
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  job: string;
  identification: string;
  address: string;
  phone: string;
  gender: string;
  age: string;
  email: string;
  password: string;
}

export const CandidateSignUp = ({ className, edit = false }: formProps) => {
  const [initialValues, setInititalValues] = useState<FormCandidate>({
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    job: "",
    identification: "",
    address: "",
    phone: "",
    gender: "",
    age: "",
    email: "",
    password: "",
  });

  const formContent = (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <InputForm label="Nombres" type="text" name="firstName" />
        <InputForm label="Apellidos" type="text" name="firstLastName" />
        <InputForm label="Cargo" type="text" name="job" />
        <InputForm label="Identificación" type="text" name="nit" />
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <InputForm label="Dirección" type="text" name="address" />
        <InputForm label="Telefono" type="tel" name="phone" />
        <InputForm label="Genero" type="text" name="gender" />
        <InputForm label="Edad" type="number" name="age" />
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
        <InputAreaForm
          label="Descripción"
          name="description"
          placeholder="Que buscas?..."
        />
      </div>
      <div className="flex justify-center items-center">
        <CustomButton
          type="submit"
          content={`${edit ? "Editar" : "Registrarse"}`}
          className="mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        />
      </div>
    </>
  );

  const onSubmit = async (values: { [key: string]: any }) => {
    const dtoCandidate = {
      "firstName": values.firstName,
      "secondName": values.firstName,
      "firstLastName": values.firstLastName,
      "secondLastName": values.firstLastName,
      "job": values.job,
      "identification": values.nit,
      "address": values.address,
      "phone": values.phone,
      "gender": values.gender,
      "age": values.age,
      "userBE": {
        "email": values.email,
        "password": values.password,
      },
    };
    console.log(values);
    const result = await loginService.createCandidate(dtoCandidate);
    console.log(result);
  };

  return (
    <div>
      <FormBase
        initialValues={initialValues}
        yupSchema={schema}
        children={formContent}
        onSubmit={onSubmit}
      />
    </div>
  );
};
