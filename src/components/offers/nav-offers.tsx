import { SearchButton } from "../commons/search-button"

export const NavOffers = () => {


    return (<>
            <section className="grid grid-cols-3 w-full pt-2 px-2">
                <SearchButton></SearchButton>
                <section></section>
                <h4 className="text-sm pl-3 font-bold py-2 w-full ">Mis postulaciones</h4>
            </section>
    </>)
}