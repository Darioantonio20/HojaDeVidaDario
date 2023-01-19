import '../../assets/imgs/styles/Header.css'
import Dario from '../../assets/imgs/dario.png'

function Header() {
    return ( 
        <header>
            <div className="headerVerde">   
                <img className='darioImg' src={Dario}></img>
                <h1 className='titulo'>Darío Antonio Gutiérrez Álvarez</h1>
                <h2 className='subtitulo'>Engineering Student in Software Development</h2>
            </div>
        </header>
     );
}

export default Header;