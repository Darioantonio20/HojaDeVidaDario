import Imagen from "../atoms/Imagen";
import '../../assets/styles/Imagenes.css'
import imgLeng from "../../assets/imgs/lenguaje.png"
function BodyImagenes() {
    return ( 
        <>
        <div className="imagenLenguaje">
              <Imagen imagen={imgLeng}></Imagen>
        </div> 
        <div className="imagenCeroUno">
            <Imagen imagen={"../src/assets/imgs/ceroUno.png"}></Imagen>
        </div>
        </>
     );
}

export default BodyImagenes;