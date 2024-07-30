import "../sources/Header.css"
import LogoM from '../assets/Carne.png'
import logoS from '../assets/Carne.png'
import logoU from '../assets/Carne.png'
import { Link } from 'react-router-dom';


function Header(){
return(
 
<div class="barra">
        <div class="padre"> 
        <div class="txt"> 
      <img src={LogoM} alt="" />
        </div>

        <div class="txt">
        <img src={logoS} alt="" />
        </div>

        <div class="txt">
        <img src={logoU} alt="" />
        </div>
  
        
        </div>
        <Link className="link-button" to={"/Vercitas"}>ver citas</Link>
        </div>
   
     
      



);
}
export default Header;