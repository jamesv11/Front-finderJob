import { cardProps } from "../card/card"


export const PublicationCard = ({ title, description, children, className }: cardProps) => {


    return (<div className="w-max overflow-hidden w-11/12 border border-neutral-950 bg-zinc-50">
        <div className={`${className} px-3 py-3`}>
            <div className="mb-2">
                <span className="font-medium text-blue-400 text-2xl">Puesto: </span>
                <span className=" font-medium text-xl">
                    Gerente
                </span>
            </div>
            <p className="font-medium text-gray-500 text-base my-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <section className="flex justify-around items-baseline">
                <span className="text-xs bg-gray-200 rounded-xl p-1">0/100</span>
                <span className="text-xs ">Abierta</span>
            </section>
        </div>
    </div>)
}