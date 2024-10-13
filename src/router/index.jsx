import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Home from "../pages/Home";
import Create from "../pages/Create";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: < Home />,
            },
            {
                path: "/create",
                element: < Create />
            },
            {
                path: "/about",
                element: < About />
            }
        ]
    },
]);

export default router;
