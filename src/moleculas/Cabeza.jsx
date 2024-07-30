import "../sources/Cabezera.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function Cabezera() {
  return (
    <div>
      <header className="header">
        <div className="overlay">
          <Typography variant="h2">Habitad Inteligente</Typography>
          <Typography variant="h5" sx={{ mt: '1em', mb: '1em' }}>
            La mejor manera de mantener seguro a tu roedor
          </Typography>
          <Link to="/Registros2">
            <button className="button2">Registrar</button>
          </Link>
          <Link to="/Tablas">
            <button className="button2">Ver Listas</button>
          </Link>
          <Link to="/RegistrosElim">
            <button className="button2">Eliminar</button>
          </Link>
          <Link to="/VerHabitad">
            <button className="button2">Ver Habitad</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Cabezera;


