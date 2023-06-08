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
import Datepicker from "react-tailwindcss-datepicker";
import { DatePickerField } from "../../../../components/commons/date-picker";
import offerService from "../../../../services/offer.service";

let schema = Yup.object({
    job: Yup.string().required("Requerido"),
    expirationDate: Yup.string().required("Requerido"),
    amountApplicants: Yup.number().required("Requerido"),
    description: Yup.string().required("Requerido"),
    salary: Yup.number().required("Requerido"),
    conditions: Yup.string().required("Requerido"),
    schedule: Yup.string().required("Requerido"),
    applicantProfile: Yup.string().required("Requerido"),
});

export interface FormOffer {
    job: string,
    expirationDate: Date,
    amountApplicants: number,
    description: string,
    salary: number,
    conditions: string,
    schedule: string,
    applicantProfile: string,
}

export const PublicationPage = () => {

    const [initialValues, setInititalValues] = useState<FormOffer>({
        job: "",
        expirationDate: new Date(),
        amountApplicants: 0,
        description: "",
        salary: 0,
        conditions: "",
        schedule: "",
        applicantProfile: ""
    });

    const [modal, setModal] = useState(false);

    const [offers, setOffers] = useState<number[]>([]);

    const [offerSelected, setOfferSelected] = useState(false);

    const contentForm = (
        <div className="px-4">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Nombre de la oferta" type="text" name="job" />
                <div>
                    <label htmlFor=""></label>
                    <div className="flex items-baseline">
                        <DatePickerField name="expirationDate" />
                    </div>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Salario" type="number" name="salary" />
                <InputForm label="Condiciones" type="text" name="conditions" />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Jornada" type="text" name="schedule" />
                <InputForm label="Perfil del aplicante" type="text" name="applicantProfile" />
            </div>
            <div>
                <InputAreaForm label="Acerca del empleo" name="description" placeholder="De que se trata?..." />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm label="Numero maximo de solicitantes" type="number" name="amountApplicants" />
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



    const onSubmit = async (values: { [key: string]: any }) => {
        setModal(!modal);

        const offerDto = {
            "job" : values.job,
            "expirationDate" : values.expirationDate.toISOString().split('T')[0],
            "amountApplicants" : values.amountApplicants,
            "description" : values.description,
            "salary" : values.salary,
            "conditions" : values.conditions,
            "schedule" : values.schedule,
            "applicantProfile": values.applicantProfile,
            "company":{
                "id":"2"
            }
        }

        const result = await offerService.createOffer(offerDto)

        console.log(result);
        


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
                            <PublicationCard key={offer} setSelected={setOfferSelected}></PublicationCard>
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