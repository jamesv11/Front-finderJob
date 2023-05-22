import { ReactElement } from "react";
import { CustomButton } from "../commons/custom-button"


export interface OfferCardProps {
    title?: string,
    description?:string,
    postulate?:boolean,
    children?: ReactElement | ReactElement[];
    className?: string;
    handlePostulation?:Function,
    modal?:boolean
}

export const OfferCard = ({postulate = true, handlePostulation, modal}:OfferCardProps) => {


    const handleClick = () => {
        handlePostulation &&  handlePostulation(!modal);
    }

    

    return (<>
        <article className="w-full p-3 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all ease-out border border-gray-200 rounded h-fit bg-white ">
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
{postulate ?  <CustomButton
                type="submit"
                content="Postularse"
                className="mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                onClick={() => handleClick()}
            /> : <div className="bg-green-500 h-fit w-fit p-1 m-1 rounded-md text-white text-sm"> Aceptado </div>}
            
        </article>
    </>)
}