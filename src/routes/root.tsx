import App from "../App"
import ErrorPage from "../views/error-page/error-page"
import { LoginPage } from "../views/login/login-page";

export const root = () => {

    const routes = [
        {
            path: "/",
            element: <LoginPage></LoginPage>,
            errorElement: <ErrorPage />,
        },
    ]

    return routes;
    
}