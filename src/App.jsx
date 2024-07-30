import "../src/App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Inicio from "./pages/Inicio";
import Mapa from "./pages/Mapa";
import Registros2 from "./pages/Registros2";
import Registros3 from "./pages/Registros3";
import RegistrosElim from "./pages/RegistrosElim";
import RegistrosModic2 from "./pages/RegistrosModic2";
import RegistrosModic3 from "./pages/RegistrosModic3";
import Tablas from "./pages/tablas";
import Tablas2 from "./pages/tablas2";
import VerHabitad from "./pages/VerHabitad";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/Inicio",
      element: <Inicio />,
    },
    {
      path: "/Mapa",
      element: <Mapa />,
    },
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/Registros2",
      element: <Registros2 />,
    },
    {
      path: "/Registros3",
      element: <Registros3 />,
    },
    {
      path: "/RegistrosElim",
      element: <RegistrosElim />,
    },
    {
      path: "/RegistrosModic2",
      element: <RegistrosModic2 />,
    },
    {
      path: "/RegistrosModic3",
      element: <RegistrosModic3 />,
    },
    {
      path: "/Tablas",
      element: <Tablas />,
    },
    {
      path: "/Tablas2",
      element: <Tablas2 />,
    },
    {
      path: "/Inicio",
      element: <Inicio />,
    },
    {
      path: "/VerHabitad",
      element: <VerHabitad />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
