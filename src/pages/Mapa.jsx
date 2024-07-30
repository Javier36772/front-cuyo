import Iframe from "react-iframe";
import { Box } from "@mui/material";
import "../sources/Mapa.css";

function Mapa() {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'center',
    

    }}>

      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1910.297804788518!2d-93.12024538017836!3d16.78263706993951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8c875963f2d%3A0x141c7c6197d93657!2sNarda%20LT1%20MZ40%2C%20Potinaspak%2C%2029018%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1701068485238!5m2!1ses-419!2smx"
        height="300px"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Iframe>
    </Box>
  );
}
export default Mapa;
