import lenguaje1 from '../../assets/imgs/ceroUno.png'
import ceroUno1 from '../../assets/imgs/lenguaje.png'
import '../../assets/imgs/styles/ImagenesDescriptivas.css'
function ImagenesDescriptivas() {
    return ( 
        <div>
            <img className='ImagenDescriptiva1' src={ceroUno1}></img>
            <img className='ImagenDescriptiva2' src={lenguaje1}></img>
        </div>
     );
}

export default ImagenesDescriptivas;