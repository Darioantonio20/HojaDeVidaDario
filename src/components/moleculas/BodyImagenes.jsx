import Imagen from "../atoms/Imagen";
import '../../assets/styles/Imagenes.css'
function BodyImagenes() {
    return ( 
        <>
        <div className="imagenLenguaje">
              <Imagen imagen={"../src/assets/imgs/lenguaje.png"}></Imagen>
        </div> 
        <div className="imagenCeroUno">
            <Imagen imagen={"../src/assets/imgs/ceroUno.png"}></Imagen>
        </div>
        </>
     );
}

export default BodyImagenes;