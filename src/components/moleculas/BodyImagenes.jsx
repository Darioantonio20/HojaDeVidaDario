import Imagen from "../atoms/Imagen";
import '../../assets/styles/Imagenes.css'
import imgLeng from "../../assets/imgs/lenguaje.png"
import imgCero from "../../assets/imgs/CeroUno.png"
function BodyImagenes() {
    return ( 
        <>
        <div className="imagenLenguaje">
              <Imagen imagen={imgLeng}></Imagen>
        </div> 
        <div className="imagenCeroUno">
            <Imagen imagen={imgCero}></Imagen>
        </div>
        </>
     );
}

export default BodyImagenes;