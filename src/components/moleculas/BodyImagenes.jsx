import Imagen from "../atoms/Imagen";
import '../../assets/styles/Imagenes.css'
import imgLeng from "../../assets/imgs/lenguaje.png"
import imgCeroUno from "../../assets/imgs/imgCeroUno.png"
function BodyImagenes() {
    return ( 
        <>
        <div className="imagenLenguaje">
              <Imagen imagen={imgLeng}></Imagen>
        </div> 
        <div className="imagenCeroUno">
            <Imagen imagen={imgCeroUno}></Imagen>
        </div>
        </>
     );
}

export default BodyImagenes;