import { Navigate } from "react-router-dom"
import { Dashboard } from '../components/dashboard'
import { DashboardLayout } from "../layouts/dashboard.layout"

const appRoutes = [
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "*", element: <Navigate to="/404" /> },
            { path: "", element: <Dashboard /> },
            { path: "cart", element: "card" },
            { path: "wishlist", element:  "wishlist" },
            { path: "order", element: "order" },
            { path: "profile", element: <>profile</> },
        ],
    },
];

/* Generate permitted routes */
export const permittedRoutes = () => {
    const token = localStorage.getItem("token");
    if (token) {
        return appRoutes;
    }
    return [];
};