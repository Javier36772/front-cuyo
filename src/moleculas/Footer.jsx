import "../sources/Footer.css";
import { Grid, Typography } from "@mui/material";
import logoOf from "../assets/logoC.jpeg";

const Footer = () => {
  return (
    <Grid item={12} container sx={{
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      textAlign:'center',
      backgroundColor:'#d90429',
      height:'12em'

    }}>
      <Grid item={4}>
        <Typography variant="h3" sx={{color:'azure'}}>
        Habitad Inteligente
        </Typography>
      </Grid>

      <Grid item={4} sx={{color:'azure'}}>
        <Typography variant="h4">
        ¡Contactanos!
        </Typography>
        <Typography variant="p">
        Telefono de contacto: 961 159 50 81
        </Typography>
      </Grid>
      <Grid item={6} >
        <img src={logoOf} alt="logo" width='80px' />
      </Grid>
     
    </Grid>
  );
};

export default Footer;
