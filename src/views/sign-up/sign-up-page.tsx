import { Card } from "../../components/card/card"
import { CandidateLogin } from "../../components/login/Candidate/candidate-login"

export const SignUpPage = () => {


    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <section className="flex w-full justify-around items-center  ">
                <article>
                    <h2 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-blue-400 md:text-6xl lg:text-7xl">Finderjob</h2>
                    <p className="font-medium text-ms text-center text-blue-400">Encuentra tu trabajo soñado.</p>
                </article>
                <article>
                    <Card title="Crea una cuenta" description="" className="bg-zinc-50">
                        <CandidateLogin />
                    </Card>
                </article>
            </section>

        </div>
    )
}


export default SignUpPage;