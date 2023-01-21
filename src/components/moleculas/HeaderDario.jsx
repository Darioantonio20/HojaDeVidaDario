import Titulo from "../atoms/Titulo";
import Texto from "../atoms/Texto";
import Imagen from "../atoms/Imagen";
import data from "../../data/Data";
import '../../assets/styles/CuadroColor.css'
import '../../assets/styles/Titulo.css'



function HeaderDario() {
    return ( 
        <div className="verde">
            <div id="tituloHeader">
                <Titulo mensaje={data.información.nombre}></Titulo>
            </div>
            <div className="subTitulo">
            <Texto texto={"Engineering Student in Software Development"}></Texto>
            </div>
            <div className="imagenDario">
            <Imagen imagen={"../src/assets/imgs/dario.png"}></Imagen>
            </div>
        </div>
     );
}

export default HeaderDario;