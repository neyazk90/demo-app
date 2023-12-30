import React, { Suspense } from "react";
import { createBrowserRouter ,Navigate} from "react-router-dom";

import App, { loaderData } from './App'
const UserDetail = React.lazy(() => import("./pages/UserDetail"));
const Users = React.lazy(() => import("./pages/Users"));

const NotFound = React.lazy(()=> import("./shared/components/NotFound"));

export const appRoutes = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <NotFound />,
        loader:loaderData,
        children: [
            {
                path: '/',
                element: <Navigate to="users" replace />
              },
            {
                path: 'users',
                element: <Suspense fallback={<div>fetching Users...</div>}><Users /></Suspense>
            },
            {
                path: 'users/:uid',
                element: <Suspense fallback={<div>Details Loading...</div>}><UserDetail /></Suspense>
            }
           
        ]
    }
]);
