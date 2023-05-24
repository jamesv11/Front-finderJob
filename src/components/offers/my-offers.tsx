import { OfferCard } from "./offers-card"

export const MyOffers = () => {

    return (<div className="bg-white rounded">
       
        <div className="grid grid-cols-1 align-center max-h-screen overflow-auto p-2 gap-2">
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
            <OfferCard postulate={true}></OfferCard>
        </div>
    </div>)
}