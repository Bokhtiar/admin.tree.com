
import { DashboardLayout } from "../layouts/dashboardLayout";
import { Navigate } from "react-router-dom";
import { Category } from "../pages/Category";
import { CategoryCreate } from "../pages/Category/create";

const appRoutes = [
    {
        path: "dashboard",
        in_drawer: true,
        element: <DashboardLayout />,
        multi_menu: false,
        children: [
            {
                path: "*",
                element: <Navigate to="/404" />,
            },
            { path: "", element: <>Dashboard</> },
        ],
    },

    {
        path: "category",
        in_drawer: true,
        element: <DashboardLayout />,
        multi_menu: false,
        children: [
            {
                path: "*",
                in_drawer: false,
                multi_menu: false,
                element: <Navigate to="/404" />,
            },
            {
                path: "",
                in_drawer: false,
                multi_menu: false,
                element: <Category/>,
            },
            {
                path: "create",
                in_drawer: false,
                multi_menu: false,
                element: <CategoryCreate />,
            },
            {
                path: "show/:id",
                in_drawer: false,
                multi_menu: false,
                element: <>Customer show</>,
            },
            {
                path: "edit/:id",
                in_drawer: false,
                multi_menu: false,
                element: <>Edit</>,
            },
        ],
    },
]
/* Generate permitted routes */
export const permittedRoutes = () => {
    const token = localStorage.getItem("token");
    if (token) {
        return appRoutes;
    }else{
        return "dont get token";
    }

    return [];
};
