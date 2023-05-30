import { useState } from "react";
import { CustomButton } from "../../../../components/commons/custom-button";
import { CandidateSignUp } from "../../../../components/login/candidate/candidate-signup";
import { ModalBase } from "../../../../components/modal/modal-base";

export const ProfilePage = () => {
    const [modal, setModal] = useState(false);

    const handleClick = () => {
        setModal(!modal);
    }
    return (<>
        <ModalBase size={600} title="Editar perfil" description="" open={modal} handleModal={setModal} type={"form"} >
            <CandidateSignUp edit={true}></CandidateSignUp>
        </ModalBase>
        <section className="px-1 grid grid-cols-3 gap-8 pt-10">

            <section>
                <article className="rounded shadow-lg shadow-gray-200 flex flex-col justify-center items-center p-6">
                    <div className="bg-gray-700 w-32 h-32 rounded-full">
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-2xl">James Vanstrahlen</p>
                        <p className="text-md">Ingeniero de software</p>
                    </div>
                </article>

                <article className="mt-6 rounded shadow-lg shadow-gray-200 p-6 border border-gray-100">
                    Documentacion subida de James

                    <hr />

                    Documentos
                </article>
            </section>
            <section className="col-span-2">
                <h4 className="text-3xl font-bold">Información sobre mí</h4>
                <CustomButton
                    type="submit"
                    content="Editar perfil"
                    className="mt-6 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                    onClick={() => handleClick()}
                />

                <section className="grid grid-cols-2 mt-10">
                    <div className="flex flex-col justify-start items-baseline gap-4">
                        <p>Fecha de nacimiento : 20/04/2001</p>
                        <p>Estudios: Universidad popular del cesar</p>
                    </div>
                    <div className="flex flex-col justify-start items-baseline gap-4">
                        <p>Vive: Valledupar, Colombia</p>
                        <p>Telefono: 49920324920</p>
                    </div>
                </section>

                <section className="mt-8">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis culpa consequuntur facere pariatur quaerat, asperiores voluptates harum quam. Nihil cumque corrupti eveniet impedit necessitatibus voluptate fugit quisquam, dolorum cum incidunt.</p>
                </section>
            </section>

        </section>

    </>)
}


export default ProfilePage;