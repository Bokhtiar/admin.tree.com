import { getToken } from "../utils/helper";
import { Navigate } from "react-router-dom"
import { Dashboard } from '../components/dashboard'
import { CategoryList } from '../pages/category/index'
import { CategoryCreate } from "../pages/category/create";
import { DashboardLayout } from "../layouts/dashboard.layout"
import { CategoryEdit } from "../pages/category/edit";

const appRoutes = [
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "*", element: <Navigate to="/404" /> },
            { path: "", element: <Dashboard /> },
            { path: "category", element: <CategoryList /> },
            { path: "category/create", element: <CategoryCreate /> },
            { path: "category/edit/:id", element: <CategoryEdit /> },
            { path: "wishlist", element:  "wishlist" },
            { path: "order", element: "order" },
            { path: "profile", element: <>profile</> },
        ],
    },
]; 

/* Generate permitted routes */
export const permittedRoutes = () => {
    const token = getToken();
    if (token) {
        return appRoutes;
    }

    return [];
};