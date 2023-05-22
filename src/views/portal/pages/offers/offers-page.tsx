import { useState } from "react";
import { CustomButton } from "../../../../components/commons/custom-button";
import { FormBase } from "../../../../components/commons/form-base";
import { InputAreaForm } from "../../../../components/commons/input-area-form";
import { InputForm } from "../../../../components/commons/input-form";
import { ModalBase } from "../../../../components/modal/modal-base";
import * as Yup from "yup";
import { SearchButton } from "../../../../components/commons/search-button";
import { PublicationCard } from "../../../../components/publications/publication-card";
import { PublicationCardDetail } from "../../../../components/publications/publication-card-detail";
import { OfferCard } from "../../../../components/offers/offers-card";
import { NavOffers } from "../../../../components/offers/nav-offers";
import { MyOffers } from "../../../../components/offers/my-offers";

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

export const OffersPage = () => {


    const [modal, setModal] = useState(false);





    const contentForm = (
        <div className="px-4">
            <h4 className="pb-1 font-bold">Desarollador Frontend</h4>
            <p className="text-sm">Google</p>
            <p className="text-sm">Colombia</p>
            <section className="flex flex-col gap-2">
                <div className="bg-gray-200  rounded w-fit">
                    <p className="pl-2">Salario $5.500.000</p>
                </div>
                <div className="bg-gray-200  rounded w-fit">
                    <p className="pl-2">Tiempo completo</p>
                </div>
            </section>
            <p className="font-bold my-2">Detalles del empleo</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae asperiores incidunt vero reiciendis modi totam. Aspernatur eum, earum repellat molestias magni suscipit aut doloremque provident? Est doloremque voluptate possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, temporibus aperiam tempora nihil cum minus illum. Ipsam dolore dolores, recusandae cumque dolorum earum minus corporis repellat consequuntur voluptate maxime minima!</p>

            <div className="pt-2 pb-4 flex justify-around">
                <CustomButton
                    type="submit"
                    content="Postularse"
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

        setModal(!modal);

    };

    const handlePostulation = (modal: boolean) => {

        console.log(modal);

        setModal(modal)

    }

    return (<>
        <ModalBase size={900} title="Desarrollador Frontend" open={modal} handleModal={setModal} type={"form"} >
            {contentForm}
        </ModalBase>
        <section className="py-1 grid grid-cols-3 gap-1">

            <section className="p-1 col-span-2 ">
                <div className="my-3">
                    <SearchButton></SearchButton>
                </div>
                <div className="grid grid-cols-3 gap-1 h-fit">
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                </div>

            </section>
            <section >
                <MyOffers></MyOffers>
            </section>
        </section>
    </>)
}

export default OffersPage;