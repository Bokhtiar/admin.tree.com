import './App.css';
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from './layouts/mainLayout';
import { permittedRoutes } from './routes';


function App() {

  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <>Login</> },
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
