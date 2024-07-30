import "../sources/Ubicacion.css";

import { Link } from "react-router-dom";
import Carniceria from "../assets/Carne.png";
import Carniceria2 from "../assets/Carne.png";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function Ubicacion() {
  return (
    <div class="papados">
      <div class="card">
        <img class="clinica" src={Carniceria} alt="" />
      </div>

      <div className="cardU">
        <h1>Carniceria Rincon </h1>
        <h1 className="linea">¡Contactanos!</h1>

        <h1>Mama de fermin</h1>
        <h1>Duela de la carniceria</h1>
        <h1>Telefono de contacto: 961 159 50 81</h1>

      </div>

      <div className="card">
        <img className="clinica" src={Carniceria2} alt="" />
      </div>
    </div>
  );
}
export default Ubicacion;
