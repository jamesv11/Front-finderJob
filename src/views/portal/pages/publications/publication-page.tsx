import { CustomButton } from "../../../../components/commons/custom-button";
import { InputForm } from "../../../../components/commons/input-form";
import { SearchButton } from "../../../../components/commons/search-button";
import { PublicationCard } from "../../../../components/publications/publication-card";
import { PublicationCardDetail } from "../../../../components/publications/publication-card-detail";

export const PublicationPage = () => {

    return (<>

        <section className="py-1 grid grid-cols-2 ">
            <section className="flex flex-col px-2 justify-start items-start content-start">
                <section className="pt-2 w-full">
                    <SearchButton></SearchButton>
                </section>
                <CustomButton
                    type="submit"
                    content="Agregar oferta"
                    className="my-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                />

                <div className="overflow-auto sm:min-h-[30rem] md:min-h-[30rem] lg:min-h-[40.6rem] xl:min-h-[39rem] 2xl:min-h-[49rem] sm:max-h-[30rem] md:max-h-[30rem] lg:max-h-[40.6rem] xl:max-h-[39rem] 2xl:max-h-[49rem]">
                    <PublicationCard></PublicationCard>
                    <PublicationCard></PublicationCard>
                    <PublicationCard></PublicationCard>
                    <PublicationCard></PublicationCard>
                    <PublicationCard></PublicationCard>
                    <PublicationCard></PublicationCard>
                </div>

            </section>
            <section className="flex px-1 justify-start items-center ">
                <PublicationCardDetail></PublicationCardDetail>
            </section>
        </section>
    </>)
}

export default PublicationPage;