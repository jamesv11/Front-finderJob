import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Layout } from "../../components/layout/layout";
import { Navbar } from "../../components/navbar/navbar"

export const PortalPage = () => {

    return (<>
        <div>
            <Navbar></Navbar>
            <Layout>
                <Outlet></Outlet>
            </Layout>
        </div>

    </>)
}
export default PortalPage;