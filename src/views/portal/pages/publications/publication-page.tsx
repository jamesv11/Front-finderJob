import { useState } from "react";
import { CustomButton } from "../../../../components/commons/custom-button";
import { FormBase } from "../../../../components/commons/form-base";
import { InputAreaForm } from "../../../../components/commons/input-area-form";
import { InputForm } from "../../../../components/commons/input-form";
import { SearchButton } from "../../../../components/commons/search-button";
import { ModalBase } from "../../../../components/modal/modal-base";
import { PublicationCard } from "../../../../components/publications/publication-card";
import { PublicationCardDetail } from "../../../../components/publications/publication-card-detail";
import * as Yup from "yup";

let schema = Yup.object({
    name: Yup.string().required("Requerido"),
    ubication: Yup.string().required("Requerido"),
    aboutJob: Yup.string().required("Requerido"),
    maxNumberCandidates: Yup.number().required("Requerido"),

});

export interface FormOffer {
    name: string,
    ubication: string,
    aboutJob: string,
    maxNumberCandidates: number

}

export const PublicationPage = () => {

    const [initialValues, setInititalValues] = useState<FormOffer>({ name: '', ubication: '', aboutJob: '', maxNumberCandidates: 0 });

    const [modal, setModal] = useState(false);

    const [offers, setOffers] = useState<number[]>([]);

    const [offerSelected, setOfferSelected] = useState(false);

    const contentForm = (
        <div className="px-4">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Nombre de la propuesta" type="text" name="name" />
                <InputForm label="Ubicacion" type="text" name="ubication" />
            </div>
            <div>
                <InputAreaForm label="Acerca del empleo" name="aboutJob" placeholder="De que se trata?..." />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Numero maximo de solicitantes" type="number" name="maxNumberCandidates" />
            </div>
            <div className="pt-2 pb-4 flex justify-around">
                <CustomButton
                    type="submit"
                    content="Aceptar"
                    className="mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                />
                <CustomButton type="button"
                    content="Cancelar"
                    className="mt-2.5 bg-red-400 hover:bg-red-500 text-white font-medium py-2 px-4 rounded"
                    onClick={() => setModal(!modal)}
                />
            </div>
        </div>
    )



    const onSubmit = (values: { [key: string]: any }) => {
        console.log(values);
        const newOffers = [...offers, 1]
        setOffers(newOffers);
        setModal(!modal);

    };

    return (<>
        <ModalBase size={900} title="Crear publicacion" open={modal} handleModal={setModal} type={"form"} >
            <FormBase
                initialValues={initialValues}
                yupSchema={schema}
                children={contentForm}
                onSubmit={onSubmit}
            />
        </ModalBase>
        <section>
            {
                offers.length <= 0 && <div className="inset-20 border border-neutral-950 bg-zinc-50 px-4 flex flex-col items-center z-10 fixed bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center w-full left-0 h-full" >
                    <p className="py-2 text-center">No hay nada aun por aca, no te olvides de agregar una oferta!! <br /> Click aqui 👇!! </p>
                    <CustomButton
                        onClick={() => setModal(!modal)}
                        type="submit"
                        content="Agregar oferta"
                        className="my-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                    />
                </div>
            }
        </section>
        <section className="py-1 grid grid-cols-2 ">
            <section className="flex flex-col px-2 justify-start items-start content-start">
                <section className="pt-2 w-full">
                    <SearchButton></SearchButton>
                </section>
                <CustomButton
                    onClick={() => setModal(!modal)}
                    type="submit"
                    content="Agregar oferta"
                    className="my-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                />

                <div className="overflow-auto sm:min-h-[30rem] md:min-h-[30rem] lg:min-h-[40.6rem] xl:min-h-[39rem] 2xl:min-h-[49rem] sm:max-h-[30rem] md:max-h-[30rem] lg:max-h-[40.6rem] xl:max-h-[39rem] 2xl:max-h-[49rem]">
                    {
                        offers.map((offer) => (
                            <PublicationCard setSelected={setOfferSelected}></PublicationCard>
                        ))
                    }
                </div>

            </section>
            <section className="flex px-1 justify-start items-center ">
                {offerSelected && <PublicationCardDetail></PublicationCardDetail>}
            </section>
        </section>

    </>)
}

export default PublicationPage;