import { Formik } from "formik";


export interface formProps {
    className?: string;
}


interface formCandidate {
    name: string,
    description: string,
    nit: string,
    address: string,
    phone: string,
    email: string,
    password: string
}

export const CandidateLogin = ({ className }: formProps) => {

    return <div>
        <Formik
            initialValues={{ name: '', description: '', nit: '', address: '', phone: '', email: '', password: '' }}
            validate={values => {
                const errors: formCandidate = {
                    name: "",
                    description: "",
                    nit: "",
                    address: "",
                    phone: "",
                    email: "",
                    password: ""
                };
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                            <input
                                className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <p className="text-red-600">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>

                        <div>
                            <label htmlFor="nit" className="block mb-2 text-sm font-medium text-gray-900 ">Identificación</label>
                            <input
                                className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                type="text"
                                name="nit"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nit}
                            />
                            <p className="text-red-600">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Dirección</label>
                            <input
                                className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                type="text"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            <p className="text-red-600">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Telefono</label>
                            <input
                                className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            <p className="text-red-600">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input
                            className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <p className="text-red-600">
                            {errors.email && touched.email && errors.email}
                        </p>

                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                        <input
                            className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <p className="text-red-600">{errors.password && touched.password && errors.password}</p>

                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-90">Descripción</label>
                        <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-zinc-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Describete..." onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}></textarea>

                    </div>
                    <div className="flex justify-center items-center">
                        <button className=" mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" type="submit" disabled={isSubmitting}>
                            Registrarse
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    </div>
}

