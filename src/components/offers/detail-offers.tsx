import { useState } from "react";
import { CustomButton } from "../commons/custom-button"
import { ModalBase } from "../modal/modal-base"

export const DetailOffers = () => {

    const [modal, setModal] = useState(false);

    const handleClick = () => {
        setModal(!modal);
    }

    return <>
        <ModalBase size={600} title="Postulación" description="Estas seguro que deseas postularte a esta oferta?" open={modal} handleModal={setModal} type={"question"} ></ModalBase>
        <article className=" w-full p-3 rounded-lg border border-gray-300 rounded h-fit bg-white ">
            <h4 className="pb-1 font-bold">Desarollador Frontend</h4>
            <p className="text-sm">Google</p>
            <p className="text-sm">Colombia</p>
            <p className="text-sm">Desde casa</p>
            <section className="flex flex-col gap-2">
                <div className="bg-gray-200  rounded w-fit">
                    <p className="pl-2">Salario $5.500.000</p>
                </div>
                <div className="bg-gray-200  rounded w-fit">
                    <p className="pl-2">Tiempo completo</p>
                </div>
            </section>
            <CustomButton
                type="submit"
                content="Postularse"
                className="mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                onClick={() => handleClick()}
            />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <section>
                <h4 className="mb-4 font-bold text-xl">Acerca del empleo</h4>
                <section className="flex flex-col gap-4">
                    <div className="rounded w-fit">
                        <p className="font-bold">Salario</p>
                        <p className="pl-2">Salario $5.500.000</p>
                    </div>
                    <div className="rounded w-fit">
                        <p className="font-bold">Tipo de empleo</p>
                        <p className="pl-2">Tiempo completo</p>
                    </div>
                </section>
            </section>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <section>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquam repellat ducimus voluptates iure debitis nobis necessitatibus dicta, laudantium, dignissimos eligendi, ipsam numquam reiciendis blanditiis. Culpa officia unde quasi delectus?</p>
            </section>

        </article>
    </>
}