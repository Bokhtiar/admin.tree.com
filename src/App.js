
import { permittedRoutes } from "./routes";
import { Navigate, useRoutes } from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard.layout";


export const App = () => {

  const mainRoutes = {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: "home" },
      { path: "shop", element: "product" },
      { path: "product/show/1", element: "product" }
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      {routing}
      {/* <ToastContainer /> */}
    </>
  );
}


