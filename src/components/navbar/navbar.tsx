import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { CustomButton } from "../commons/custom-button"
import { ModalBase } from "../modal/modal-base"

export const Navbar = () => {

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const logout = (option:number) => {

        console.log(option);
        

        option === 1 && navigate("/login");

    }

    return (
        <>
            <ModalBase title="Cerrar sesion" question="Estas seguro que deseas finalizar tu sesion?" open={modal} handleModal={setModal} size={600} type={"question"} onSubmit={logout}></ModalBase>
            <nav className="">
                <div className=" flex flex-wrap items-baseline justify-between mx-auto p-4 border border-gray-200">
                    <div><p className="text-4xl text-blue-400 font-medium ">FinderJob</p></div>
                    <ul className="flex gap-3 items-baseline ">
                        <li>
                            <NavLink to={"/portal/profile"}>
                                <span className="text-base font-medium ">Perfil</span>
                            </NavLink>
                        </li>
                        <li> <NavLink to={"/portal/publications"}>
                            <span className="text-base font-medium ">Publicaciones</span>
                        </NavLink></li>
                        <li>
                            <NavLink to={"/portal/offers"}>
                                <span className="text-base font-medium ">Ofertas</span>
                            </NavLink>
                        </li>
                        <li><CustomButton onClick={() => setModal(!modal)} type="submit"
                            content="Cerrar sesión"
                            className="mt-2.5 bg-red-400 hover:bg-red-500 text-white font-medium py-2 px-4 rounded" /></li>
                    </ul>
                </div>
            </nav>
        </>

    )
}