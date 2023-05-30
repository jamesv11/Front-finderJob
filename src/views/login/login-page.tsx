import { Card, cardProps } from "../../components/card/card"
import {SignIn} from "../../components/login/login-form/sign-in-view"

export const LoginPage = () => {


    const companyCard: cardProps = {
        title: "Empresa",
        description: "Esta esa la descripción de una empresa"
    }

    const candidateCard: cardProps = {
        title: "Empresa",
        description: "Esta esa la descripción de una empresa"
    }


    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <section className="flex w-full justify-around items-center  ">
                <article>
                    <h2 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-blue-400 md:text-6xl lg:text-7xl">Finderjob</h2>
                    <p className="font-medium text-ms text-center text-blue-400">Encuentra tu trabajo soñado.</p>
                </article>
                <article>
                    <Card title="Bienvenido" description="Inicia sesion para continuar con tu camino." className="bg-zinc-50">
                        <SignIn />
                    </Card>
                </article>
            </section>

        </div>
    )
}

export default LoginPage;