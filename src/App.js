
import { permittedRoutes } from "./routes";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { getToken } from "./utils/helper";
import { ToastContainer } from "react-toastify";
import { Login } from "./pages/auth/login";

export const App = () => {

  const navigate = useNavigate();
  /* Check stored token */
  const isTokenStored = useCallback(async () => {
    const storedToken = await getToken();
    if (storedToken) {
      navigate("/dashboard");
    } else {
      navigate('/')
    }
  }, [navigate]);

  useEffect(() => {
    isTokenStored();
  }, [isTokenStored]);

  const mainRoutes = {
    path: "/",
    element: "",
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Login /> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      {routing}
      <ToastContainer />
    </>
  );
}


