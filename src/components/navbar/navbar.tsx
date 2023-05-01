import { useState } from "react";
import { NavLink } from "react-router-dom"
import { CustomButton } from "../commons/custom-button"
import { ModalBase } from "../modal/modal-base"

export const Navbar = () => {

    const [modal, setModal] = useState(false);

    return (
        <>
            <ModalBase title="Cerrar sesion" question="Estas seguro que deseas finalizar tu sesion?" open={modal} handleModal={setModal} size={440} type={"question"}></ModalBase>
            <nav className="">
                <div className=" flex flex-wrap items-baseline justify-between mx-auto p-4 shadow-lg ">
                    <div><p className="text-4xl text-blue-400 font-medium ">FinderJob</p></div>
                    <ul className="flex gap-3 items-baseline ">
                        <li>
                            <NavLink to={"/profile"}>
                                <span className="text-base font-medium ">Perfil</span>
                            </NavLink>
                        </li>
                        <li> <NavLink to={"/publications"}>
                            <span className="text-base font-medium ">Publicaciones</span>
                        </NavLink></li>
                        <li><CustomButton onClick={() => setModal(!modal)} type="submit"
                            content="Cerrar sesión"
                            className="mt-2.5 bg-red-400 hover:bg-red-500 text-white font-medium py-2 px-4 rounded" /></li>
                    </ul>
                </div>
            </nav>
        </>

    )
}