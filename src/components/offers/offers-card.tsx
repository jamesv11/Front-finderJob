import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import { CustomButton } from "../commons/custom-button";
import { ModalBase } from "../modal/modal-base";
import { Offer } from "../../views/portal/pages/offers/offers-page";

export interface OfferCardProps {
    title?: string,
    description?: string,
    postulate?: boolean,
    children?: ReactElement | ReactElement[];
    className?: string;
    handlePostulation: Function,
    handleSelected:Function,
    selected: boolean,
    offers: Offer[]
}

export const OfferCard = ({ postulate = false, handlePostulation, handleSelected, selected, offers = [] }: OfferCardProps) => {
  
  useEffect(() => {
    offers.map(offer => {
      console.log(offer.job);
    })
  }, [])
  

    const [modal, setModal] = useState(false);

    const onDelete = () => {


        setModal(!modal)


    }



    return (
      <>
        <ModalBase
          title="Eliminar postulacion"
          question="Estas seguro que deseas eliminar tu postulacion?"
          open={modal}
          handleModal={setModal}
          size={600}
          type={"question"}
          onSubmit={onDelete}
        ></ModalBase>
        {offers.map((offer) => (
          <article
            className={`w-full p-3 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all ease-out border ${
              selected ? "border-blue-300" : "border-gray-200"
            } rounded h-fit bg-white `}
            onClick={() => handleSelected()}
          >
            <article className="flex justify-between">
              <h4 className="pb-1 font-bold">{ offer.job}</h4>{" "}
              {postulate && (
                <FontAwesomeIcon
                  className="cursor-pointer"
                  onClick={() => onDelete()}
                  icon={["fas", "trash"]}
                />
              )}
            </article>
            <p className="text-sm">{ offer.conditions}</p>
            <p className="text-sm">{ offer.applicantProfile}</p>
            <section className="flex flex-col gap-2">
              <div className="bg-gray-200  rounded w-fit">
                <p className="pl-2">Salario ${ offer.salary}</p>
              </div>
              <div className="bg-gray-200  rounded w-fit">
                <p className="pl-2">{offer.schedule}</p>
              </div>
            </section>
            {postulate && (
              <div className="flex justify-start items-baseline gap-2 mt-2">
                <div className="bg-green-500 h-fit w-fit p-1 m-1 rounded-md text-white text-sm"></div>{" "}
                <span>Aceptado</span>
              </div>
            )}
          </article>
        ))}
      </>
    );
}