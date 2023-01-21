import Titulo from "../atoms/Titulo";
import Texto from "../atoms/Texto";
import Imagen from "../atoms/Imagen";
import '../../assets/styles/CuadroColor.css'
import '../../assets/styles/Titulo.css'



function HeaderDario() {
    return ( 
        <div className="verde">
            <div id="tituloHeader">
                <Titulo mensaje={"Darío Antonio Gutiérrez Álvarez"}></Titulo>
            </div>
            <div>
            <Texto texto={"Engineering Student in Software Development"}></Texto>
            </div>
            <div>
            <Imagen imagen={"../src/assets/imgs/dario.png"}></Imagen>
            </div>
        </div>
     );
}

export default HeaderDario;