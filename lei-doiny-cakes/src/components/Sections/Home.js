import ComoComprar from '../Sections/ComoComprar.js';
import NavProductos from './NavProductos.js'
import '../css/Main.css';

function Home (){
    return(
        <>
            <div className="presentacion">
                <h1>Disfrutá increibles tortas artesanales</h1>
                <p className="pPresentacion">Nos encanta formar parte de tu festejo.¡Dejate tentar por las más ricas tentaciones!</p>
            </div>
            <ComoComprar />
            <NavProductos />
        </>
    )
};

export default Home;