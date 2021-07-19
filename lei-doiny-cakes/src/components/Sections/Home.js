import MenuProductos from '../Categories/Categories.js';
import ItemListContainer from '../Item/ItemList/ItemListContainer.js';
import ComoComprar from '../Sections/ComoComprar.js';
import '../css/Main.css';

function Home (){
    return(
        <>
            <div className="presentacion">
                <h1>Disfrutá increibles tortas artesanales</h1>
                <p className="pPresentacion">Nos encanta formar parte de tu festejo.¡Dejate tentar por las más ricas tentaciones!</p>
                <button className="bPresentacion btn">Ver más</button>
            </div>
            <ComoComprar />
            <div className="menuProductos">
                <div className="container">
                    <h2>Explorá nuestro menú</h2>
                    <>
                        <MenuProductos />
                    </>
                    <div className="container">
                        <ItemListContainer />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;