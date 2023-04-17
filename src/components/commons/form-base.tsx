import { ComponentExtendStyle } from "../../interfaces/interface";
import { Form, Formik, FormikHelpers } from "formik";
import { AnyObject, ObjectSchema, ObjectShape } from "yup/index";

interface Props extends ComponentExtendStyle {
    children: JSX.Element | JSX.Element[];
    initialValues: { [key: string]: any };
    yupSchema: any;
    onSubmit: ((
        values: { [key: string]: any },
        formikHelpers: FormikHelpers<{ [key: string]: any }>
    ) => void | Promise<any>) &
    Function;
    sucess?: boolean;
}

export const FormBase = ({
    onSubmit,
    yupSchema,
    children,
    initialValues,
    className,
    sucess,
}: Props) => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={yupSchema}
        >
            {(formik) => (
                <Form className={className} noValidate>
                    {children}
                </Form>
            )}
        </Formik>
    )
}