import { Outlet } from "react-router-dom";
import { Layout } from "../../components/layout/layout";
import { Navbar } from "../../components/navbar/navbar"

export const PortalPage = () => {

    return (<>
            <Navbar></Navbar>
            <Layout>
                <Outlet></Outlet>
            </Layout>
    </>)
}
export default PortalPage;