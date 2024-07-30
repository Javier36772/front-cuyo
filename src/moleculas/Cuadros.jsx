import "../sources/Cuadros.css";
import imagenuno from "../assets/cuchillo.jpg";
import imagendos from "../assets/carne.png";
import imagentres from "../assets/foco.jpg";
import imagencuatro from "../assets/variedad.jpg";
import imagencinco from "../assets/Higiene.jpg";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const cont = [
  {
    img: imagendos,
    tit: "Calidad de la carne",
    sub: "La carnicería a menudo ofrece carne fresca y de alta calidad. Puedes hablar con el carnicero para obtener información sobre el origen de la carne, cómo se criaron los animales y otros detalles importantes. ",
  },
  {
    img: imagenuno,
    tit: "Corte personalizado",
    sub: "En la carnicería, puedes solicitar cortes específicos de carne según tus preferencias. Los carniceros tienen habilidades para realizar cortes especializados y pueden adaptarse a tus necesidades.",
  },
  {
    img: imagentres,
    tit: "Consejos y recomendaciones",
    sub: "Los carniceros son expertos en carne y pueden ofrecer consejos sobre la mejor forma de cocinar diferentes cortes, así como recomendaciones sobre marinados y condimentos.",
  },
  {
    img: imagencuatro,
    tit: "Variedad de productos",
    sub: "La carnicería a menudo ofrecen una variedad más amplia de productos cárnicos, incluyendo cortes menos comunes o especialidades locales que podrían no estar disponibles en un supermercado convencional.",
  },
  {
    img: imagencinco,
    tit: "Higiene y almacenamiento:",
    sub: "La higiene y las condiciones de almacenamiento son aspectos cruciales. Se asegura de que la carnicería cumpla con los estándares de salud y seguridad alimentaria es fundamental para garantizar la frescura y calidad de los productos.",
  },
];
function Cuadros() {
  return (

      <Grid
        container spacing={4}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
            mt:'2em',
            display:'flex',
            justifyContent:'center',
            boxSizing:'border-box'
        }}
      >

        <>
          {cont.map((info) => (
            <Grid
              key={info}
              item={4}
              sx={{
                borderTop: "rgb(246, 2, 2) solid",
                width:'20em',
                m:'20px',
                textAlign:'center',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                transition:'1s all ease',
                '&:hover': {
                   
                   transform:'scale(1.1)'
                  },
                
              }}
            >
              <Typography variant="h4" sx={{mb:'20px'}}>{info.tit}</Typography>
              <img src={info.img} alt={info.tit} width='80px' />
              <Typography variant="p" sx={{mt:'20px'}}>{info.sub}</Typography>
            </Grid>
          ))}
        </>
      </Grid>

  );
}
export default Cuadros;
