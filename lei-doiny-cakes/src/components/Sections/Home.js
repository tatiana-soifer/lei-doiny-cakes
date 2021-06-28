import {Link} from 'react-router-dom';
import ItemListContainer from '../Item/ItemList/ItemListContainer';
import '../css/Main.css';

function Home (){
    return(
        <div>
            <div className="presentacion">
                <h1>Disfrutá increibles tortas artesanales</h1>
                <p className="pPresentacion">Nos encanta formar parte de tu festejo.¡Dejate tentar por las más ricas tentaciones!</p>
                <button className="bPresentacion btn">Ver más</button>
            </div>
            <div className="menuProductos">
                <div className="container">
                    <h2>Explorá nuestro menú</h2>
                    <div className="menuListado">
                        <ol>
                            <Link className="categoriaItem" category="tortas">Tortas</Link>
                            <Link className="categoriaItem" category="desayunosMeriendas">Desayunos y Meriendas</Link>
                            <Link className="categoriaItem" category="letterCakes">Letter Cake</Link>
                            <Link className="categoriaItem" category="shots">Shots</Link>
                        </ol>
                    </div>
                    <div className="cuadriculaProductos">
                        <ItemListContainer />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;