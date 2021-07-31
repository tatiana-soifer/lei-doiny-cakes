import {Link} from 'react-router-dom';
import ComoComprar from '../Sections/ComoComprar.js';
import '../css/Main.css';

function Home (){
    return(
        <>
            <div className="presentacion">
                <h1>Disfrutá increibles tortas artesanales</h1>
                <p className="pPresentacion">Nos encanta formar parte de tu festejo.¡Dejate tentar por las más ricas tentaciones!</p>
                <Link to="/"className="bPresentacion btn">Ver más</Link>
            </div>
            <ComoComprar />
        </>
    )
};

export default Home;