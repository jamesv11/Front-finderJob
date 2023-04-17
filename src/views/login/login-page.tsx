import { Card, cardProps } from "../../components/card/card"
import { CandidateLogin } from "../../components/login/Candidate/candidate-login"
import { SignUp } from "../../components/login/login-form/sign-up-view"

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
            {/* <section className="flex ">
                <article >
                    <Card title={companyCard.title} description={companyCard.description}></Card>
                </article>
                <article>
                    <Card title={candidateCard.title} description={candidateCard.description} ></Card>
                </article>

            </section> */}
            <section className="flex w-full justify-around items-center  ">
                <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-zinc-100 md:text-6xl lg:text-7xl">Finderjob</h2>
                <Card title="Bienvenido" description="Inicia sesion para continuar con tu camino."  className="bg-zinc-100">
                    <SignUp/>
                    
                </Card>
            </section>

        </div>
    )
}