import { cardProps } from "../card/card"


export const PublicationCard = (props:any) => {
    return (<div className="cursor-pointer w-full border border-neutral-950 bg-zinc-50" onClick={() => props.setSelected(true)}>
        <div className={`${''} px-3 py-3`}>
            <div className="mb-2 flex justify-between item-baseline">
                <span className=" font-medium text-xl hover:underline cursor-pointer">
                    Gerente
                </span>
                <div className="text-xs flex gap-2">
                    <div className="h-4 w-4 rounded-full bg-green-400"></div>
                    Abierta
                </div>
            </div>
            <section>
                <p style={{"textOverflow":"ellipsis", "overflow": "hidden"}} className="text-sm text-gray-500 mb-2 h-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </section>
            <section className="flex justify-start items-baseline content-baseline gap-40">
                <article className="flex gap-2">
                    <span className="text-sm">Candidatos: </span>
                    <div className="text-xs bg-gray-200 rounded-xl p-1">0/100</div>
                </article>
                
            </section>
        </div>
    </div>)
}