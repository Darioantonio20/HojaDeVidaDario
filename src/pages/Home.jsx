import { Link } from "react-router-dom";
import CartasInformacion from "../components/moleculas/CartasInformacion";
import HeaderDario from "../components/moleculas/HeaderDario";
import BodyImagenes from "../components/moleculas/BodyImagenes"
import CartasBody from "../components/moleculas/CartasBody";
function Home() {
    return ( 
        <>
            <HeaderDario></HeaderDario>
            <CartasInformacion></CartasInformacion>
            <BodyImagenes></BodyImagenes>
            <CartasBody></CartasBody>
        </>
     );
}

export default Home;
