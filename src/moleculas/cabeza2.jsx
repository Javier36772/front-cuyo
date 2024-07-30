import "../sources/Cabezera.css";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";
function Cabezera() {
  return (
    <div>
      <header class="header">
        <div class="overlay">
          <Typography variant="h2">Carniceria rincon</Typography>
          <Typography variant="h5" sx={{mt:'1em',mb:'1em'}}>La mejor carne de la ciudad</Typography>
          <Link to="/Registros">
            <button class="button2">Agregar Empleado</button>
          </Link>
          <Link to="/Tablas2">
            <button class="button2">Ver Empleados</button>
          </Link>
          <Link to="/RegistrosElim2">
            <button class="button2">Eliminar empleado</button>
          </Link>
          <Link to="/RegistrosModic">
            <button class="button2">Modificar empleado</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
export default Cabezera;
