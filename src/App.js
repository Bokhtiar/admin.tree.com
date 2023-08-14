import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import { MainLayout } from './layouts/mainLayout';
import { permittedRoutes } from './routes';
import { Login } from './components/Auth/Login';
import { getToken } from "./utils/helper";
import { useCallback, useEffect } from "react";


function App() {
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
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Login /> },
      { path: "reset", element: <>Reset</> },
      { path: "404", element: <>Not found</> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      {routing}
    </>
  );
}

export default App;
