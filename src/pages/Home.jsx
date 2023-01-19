import { Link } from "react-router-dom";
import DatosPersonales from "../components/atoms/DatosPersonales";
import Header from "../components/atoms/Header";
import Conocimiento from "../components/Conocimiento";
import Habilidades from "../components/Habilidades";
import RedeSociales from "../components/RedeSociales";
function Home() {
    return ( 
        <>
            <Header></Header>
            <Conocimiento></Conocimiento>
            <DatosPersonales></DatosPersonales>
            <RedeSociales></RedeSociales>
            <Habilidades></Habilidades>
        </>
     );
}

export default Home;
