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
import { DetailOffers } from "../../../../components/offers/detail-offers";

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




    const handlePostulation = (modal: boolean) => {

        console.log(modal);



    }

    return (<>
        <NavOffers></NavOffers>
        <section className="py-1 grid grid-cols-3 gap-1">
            <section className="p-1">
                <div className="grid grid-cols-1 gap-1 h-screen overflow-auto pt-2">
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                    <OfferCard handlePostulation={handlePostulation}></OfferCard><OfferCard handlePostulation={handlePostulation}></OfferCard>
                </div>
            </section>
            <section>
            <DetailOffers/>
        </section>
        <section >
            <MyOffers></MyOffers>
        </section>
    </section>
    </>)
}

export default OffersPage;