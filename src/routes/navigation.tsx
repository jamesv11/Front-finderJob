import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Suspense } from "react";
import { privateRoutes, publicRoute } from "./root";




export const Navigation = () => {

    return (
        <BrowserRouter>

            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    {publicRoute.map(({ to, path, Component }) => (
                        <Route key={to} path={path} element={<Component />} />
                    ))}
                    {
                        privateRoutes.map(({ to, path, Component, children }) => (
                            <Route key={to} path={path} element={<Component />}>
                                {
                                    children?.map(({ to, path, Component }) => (
                                        <Route key={to} path={path} element={<Component />}></Route>
                                    ))
                                }
                            </Route>
                        ))
                    }
                    <Route
                        path="/*"
                        element={<Navigate to={publicRoute[0].to} replace />}
                    />
                </Routes>
            </Suspense>

        </BrowserRouter>
    );
};