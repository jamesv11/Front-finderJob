import { PublicationCard } from "../../../../components/publications/publication-card";
import { PublicationCardDetail } from "../../../../components/publications/publication-card-detail";

export const PublicationPage = () => {

    return (<>
        <div className="grid grid-cols-2 ">
            <section className="flex flex-col px-2 justify-center items-center">
                <PublicationCard></PublicationCard>
            </section>
            <section>
                <PublicationCardDetail></PublicationCardDetail>
            </section>
        </div>
    </>)
}

export default PublicationPage;