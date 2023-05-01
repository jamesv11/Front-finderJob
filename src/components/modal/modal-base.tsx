import { FormikHelpers } from "formik";
import { Children, ReactElement } from "react";
import { CustomButton } from "../commons/custom-button"

interface ModalProps {

    open: boolean,
    handleModal: (args: boolean) => void,
    title: string,
    description?: string,
    question?: string,
    children?: ReactElement | ReactElement[],
    size:number,
    type:"form" | "question",
    onSubmit?:(args:number) => void;


}

export const ModalBase = ({ title, description, question, size, open, children,type = "question", handleModal, onSubmit }: ModalProps) => {


    const onChangeModal = (option?:number) => {

        handleModal(!open);

        onSubmit && onSubmit(option=1);
        
    }


    return (<>
        {
           open ? <div className="z-20 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className={`${type === "question" ? 'min-w-[440px] max-w-[440px]':'min-w-[900px] max-w-[900px]'} `}>
                    <button className="text-white text-xl place-self-end" onClick={onChangeModal}>
                        X
                    </button>
                    <div className="bg-white p-2 rounded">
                        <h4 className="text-2xl font-bold text-center py-4">{title}</h4>
                        <section >
                            <p className="text-center">{description}</p>
                        </section>
                        <section>
                            {children}
                        </section>

                        {type === "question" ? <section className="py-4">
                            <p className="text-center">{question}</p>
                            <div className="pt-2 flex justify-around">
                                <CustomButton
                                    type="submit"
                                    content="Aceptar"
                                    className="mt-2.5 bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                                    onClick={() => onChangeModal(1)}
                                />
                                <CustomButton type="button"
                                    content="Cancelar"
                                    className="mt-2.5 bg-red-400 hover:bg-red-500 text-white font-medium py-2 px-4 rounded"
                                    onClick={() => onChangeModal(2)}
                                />
                            </div>
                        </section>  : null}
                    </div>
                </div>
            </div> : null
        }
    </>)
}