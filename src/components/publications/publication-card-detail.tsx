import { useState } from "react"
import { cardProps } from "../card/card"
import { CustomButton } from "../commons/custom-button"
import { Select } from "../commons/select"
import { ModalBase } from "../modal/modal-base"
import { CandidateCard } from "./candidate-card"

export const PublicationCardDetail = () => {

    const [modal, setModal] = useState(false);
    return (
        <>
            <ModalBase title="Eliminar  oferta?" description="Estas a punto de eliminar una oferta publicada permanentemente, perderas cualquier registro o candidato piostulado" question="Estas seguro de realizar esta accion?" open={modal} handleModal={setModal} size={440} type={"question"}></ModalBase>
            <div className="sm:min-h-[30rem] md:min-h-[30rem] lg:min-h-[40.6rem] xl:min-h-[46rem] 2xl:min-h-[55rem] sm:max-h-[30rem] md:max-h-[30rem] lg:max-h-[41rem] xl:max-h-[46rem] 2xl:max-h-[55rem] w-full border border-gray-200 bg-zinc-50 shadow-sm rounded">
                <div className={`${''} px-8 pt-6`}>
                    <section className="flex justify-between items-baseline mb-2">
                        <span className="font-medium text-xl">
                            Gerente
                        </span>
                        <CustomButton type="button"
                            content="Eliminar"
                            className="mt-2.5 bg-red-400 hover:bg-red-500 text-white font-medium py-2 px-4 rounded"
                            onClick={() => setModal(!modal)}
                             />
                    </section>
                    <section className="mb-2">
                        <ul>
                            <li className="text-sm text-gray-500">Tiempo completo</li>
                            <li className="text-sm text-gray-500">Desde casa</li>
                            <li className="text-sm text-gray-500">Valledupar - Cesar</li>
                        </ul>
                    </section>
                    <section className="mt-2 my-4">
                        <p className="text-lg">Estado</p>
                        <Select></Select>
                    </section>
                    <section className="mb-2">
                        <p className="text-lg">Detalles del empleo</p>
                        <p className="text-sm text-gray-500 my-1 text-ellipsis overflow-auto h-24 text-wrap">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </section>
                    <section className="">
                        <p className="text-xl pb-2">Aspirantes</p>
                        <section className="overflow-auto flex flex-wrap h-80 max-h-80 min-h-80">
                            <CandidateCard></CandidateCard>
                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}