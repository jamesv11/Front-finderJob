/* import App from "../App"
import ErrorPage from "../views/error-page/error-page"
import { LoginPage } from "../views/login/login-page";
import { ProfilePage } from "../views/portal/pages/profile/profile-page";
import { PublicationPage } from "../views/portal/pages/publications/publication-page";
import { PortalPage } from "../views/portal/portal-page";
import { SignUpPage } from "../views/sign-up/sign-up-page";

export const root = () => {

    const routes = [
        {
            path: "/",
            element: <LoginPage></LoginPage>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/sign-up",
            element: <SignUpPage></SignUpPage>,
            errorElement: <ErrorPage />,
        },     
        {
            path:"portal",
            element: <PortalPage></PortalPage>,
            children:[
                {
                    path:"profile",
                    element: <ProfilePage></ProfilePage>
                },
                {
                    path:"publications",
                    element: <PublicationPage></PublicationPage>
                }
            ]
        }
    ]

    return routes;
    
} */

import { lazy, LazyExoticComponent } from "react";


type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?:Array<any>
}

const LoginPage = lazy(() => import("../views/login/login-page"));
const SignUpPage = lazy(() => import("../views/sign-up/sign-up-page"));
const PortalPage = lazy(() => import("../views/portal/portal-page"));
const ProfilePage = lazy(() => import("../views/portal/pages/profile/profile-page"))
const PublicationPage = lazy(() => import("../views/portal/pages/publications/publication-page"))
const OffersPage = lazy(() => import("../views/portal/pages/offers/offers-page"))


export const privateRoutes: Route[] = [
  {
    to: "/portal",
    path: "portal",
    Component: PortalPage,
    name: "portal",
    children:[
        {
            to:"/profile",
            path:"profile",
            Component:ProfilePage
        },
        {
            to:"/publications",
            path:"publications",
            Component:PublicationPage
        },
        {
          to:"/offers",
          path:"offers",
          Component:OffersPage
      },

    ]
  },
];

export const publicRoute: Route[] = [
  {
    to: "/login",
    path: "login",
    Component: LoginPage,
    name: "login",
  },
  {
    to: "/sign-up",
    path: "sign-up",
    Component: SignUpPage,
    name: "Registrarse",
  },
];