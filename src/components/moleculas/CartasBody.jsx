import Texto from '../atoms/Texto';
import Titulo from '../atoms/Titulo';
import '../../assets/styles/Texto.css'
import '../../assets/styles/Titulo.css'
import '../../assets/styles/CuadroColor.css'

function CartasBody() {
    return ( 
    <div className="cartaAzulDatosPersonales">
        <div className="tituloDatosPersonales">
            <Titulo mensaje={"*Datos Personales*"}></Titulo>
        </div>
        <div className="textoCartaDatosPersonales">
            <Texto texto={<ul className='textoCartaDatosPersonales'>
                <li>Correo : antoniodario10@hotmail.com</li>
                <li>Universidad : Politécnica de Chiapas</li>
                <li>Domicilio : Bv. La salle #621</li>
                <li>Curp : GUAD010602HCSTLRA7</li>
                <li>RFC: GUAD020601CXA</li>
            </ul>}></Texto>
        </div>
        <div className='cartaAzulRedesSociales'>
            <div className='tituloRedesSociales'>
                <Titulo mensaje={"*Redes Sociales*"}></Titulo>
            </div>
            <div className='textoRedesSociales'>
                <Texto texto={"Facebook : Darío Álvarez Instagram : @gtzdario Twitter : @dariogtz94"}></Texto>
            </div>
        </div>
        <div className='cartaAzulHabilidades'>
            <div className='tituloHabilidades'>
                <Titulo mensaje={"*Habilidades*"}></Titulo>
            </div>
            <div className='textoCartaHabilidad'>
                <Texto texto={"Fácil interacción con personas al igual que empatizar con ellas, practica de deportes de alta intensidad al igual que de baja intensidad, apasionado de los video juegos pero en especifico street fighter ya que tengo una gran habilidad en dicho juego."}></Texto>
            </div>
        </div>
    </div>
     );
}

export default CartasBody;