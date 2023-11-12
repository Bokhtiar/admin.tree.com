import { getToken } from "../utils/helper"
import { Product } from "../pages/product"
import { Navigate } from "react-router-dom"
import { Dashboard } from '../components/dashboard'
import { CategoryEdit } from "../pages/category/edit";
import { CategoryList } from '../pages/category/index'
import { CategoryCreate } from "../pages/category/create";
import { DashboardLayout } from "../layouts/dashboard.layout"

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
            { path: "product", element:  <Product /> },
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