import { NavOffers } from "./nav-offers"
import { OfferCard } from "./offers-card"

export const MyOffers = () => {

    return (<div className="bg-white rounded">
        <NavOffers></NavOffers>
        <div className="grid grid-cols-1 align-center max-h-screen overflow-auto p-2 gap-2">
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
            <OfferCard postulate={false}></OfferCard>
        </div>
    </div>)
}