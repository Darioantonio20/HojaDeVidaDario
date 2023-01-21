import Titulo from "../atoms/Titulo";
import Texto from "../atoms/Texto";
import '../../assets/styles/CuadroColor.css'
import '../../assets/styles/Titulo.css'
import '../../assets/styles/Texto.css'

function CartasInformacion() {
    return ( 
        <div className="azul">
        <div className="tituloCarta">
            <Titulo mensaje={"Conocimiento"}></Titulo>
        </div>
        <div className="textoCarta">
        <Texto texto={"Tengo un campo de conocimiento acerca de los siguientes lenguajes de programación: C++,C , Java , JS. Al igual que ligeros conociemintos en frameworks como: bootstrap y react."}></Texto>
        </div>
    </div>
     );
}

export default CartasInformacion;