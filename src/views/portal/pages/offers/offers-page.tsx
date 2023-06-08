import * as Yup from "yup";
import { OfferCard } from "../../../../components/offers/offers-card";
import { NavOffers } from "../../../../components/offers/nav-offers";
import { MyOffers } from "../../../../components/offers/my-offers";
import { DetailOffers } from "../../../../components/offers/detail-offers";
import { useState } from "react";

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


    const [selected, setSelected] = useState(false);

    const handlePostulation = (modal: boolean) => {

        console.log(modal);

    }

    const handleSelected = () => {
        setSelected(true);
    }



    return (<>
        <NavOffers></NavOffers>
        <section className="py-1 grid grid-cols-3 gap-1">
            <section className="p-1">
                <div className="grid grid-cols-1 gap-1 h-screen overflow-auto pt-2">
                    <OfferCard handlePostulation={handlePostulation} handleSelected={handleSelected} selected={selected}></OfferCard>
                </div>
            </section>
            <section>
            {selected && <DetailOffers/>}
            {selected || <p className="text-center">Selecciona una oferta...</p> }
        </section>
        <section >
            <MyOffers></MyOffers>
        </section>
    </section>
    </>)
}

export default OffersPage;