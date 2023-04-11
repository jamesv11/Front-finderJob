import App from "../App"
import ErrorPage from "../views/error-page/error-page"

export const root = () => {

    const routes = [
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
    ]

    return routes;
    
}