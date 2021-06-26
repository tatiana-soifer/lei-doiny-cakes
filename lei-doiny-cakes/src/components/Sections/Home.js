import '../css/Main.css';
import ItemListContainer from '../Item/ItemList/ItemListContainer';

function Home (){
    return(
        <div>
            <div className="presentacion">
                <h1>Disfrutá increibles tortas artesanales</h1>
                <p className="p_presentacion">Nos encanta formar parte de tu festejo.¡Dejate tentar por las más ricas tentaciones!</p>
                <button className="b_presentacion btn">Ver más</button>
            </div>
            <div className="menuProductos">
                <div className="container">
                    <h2>Explorá nuestro menú</h2>
                    <div className="menuListado">
                        <ol>
                            <li className="categoriaItem" category="todos">Todos</li>
                            <li className="categoriaItem" category="tortas">Tortas</li>
                            <li className="categoriaItem" category="desayunosMeriendas">Desayunos y Meriendas</li>
                            <li className="categoriaItem" category="letterCakes">Letter Cake</li>
                            <li className="categoriaItem" category="shots">Shots</li>
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