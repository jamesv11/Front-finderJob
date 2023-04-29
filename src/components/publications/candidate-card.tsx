export const CandidateCard = () => {

    return (<div className="cursor-pointer w-full border border-neutral-950 bg-zinc-50">
        <div className={`${''} px-3 py-3 flex justify-start items-center gap-3`}>
            <section>
                <div className="h-20 w-20 rounded-full  bg-gray-200">

                </div>
            </section>
            <div className="flex w-full justify-between items-center">
                <section>
                    <span className=" font-medium text-xl hover:underline cursor-pointer">
                        James Vanstrahlen
                    </span>
                    <p style={{ "textOverflow": "ellipsis", "overflow": "hidden" }} className="text-sm text-gray-500 mb-2">
                        Ingeniero de software
                    </p>
                </section>
                <section>
                    <p className="text-4xl">{">"}</p>
                </section>
            </div>
        </div>
    </div>)
}