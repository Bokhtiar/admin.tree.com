import { DashboardLayout } from "../layouts/dashboardLayout";
import { Navigate } from "react-router-dom";

const appRoutes = [
    {
        path: "dashboard",
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
            { path: "", in_drawer: false, multi_menu: false, element: <>Dashboard</> },
            { path: "user", in_drawer: false, multi_menu: false, element: <>user</> },
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
