import {NavLink} from 'react-router-dom';
import ItemListContainer from '../Item/ItemList/ItemListContainer.js';
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
                            <NavLink className="categoriaItem" exact to="/category/todos" activeClassName="selected" category="todos">Menu Completo</NavLink>
                            <NavLink className="categoriaItem" exact to="/category/tortas" activeClassName="selected" category="tortas">Tortas</NavLink>
                            <NavLink className="categoriaItem" exact to="/category/desayunosMeriendas" activeClassName="selected" category="desayunosMeriendas">Desayunos y Meriendas</NavLink>
                            <NavLink className="categoriaItem" exact to="/category/letterCakes" activeClassName="selected" category="letterCakes">Letter Cake</NavLink>
                            <NavLink className="categoriaItem" exact to="/category/shots" activeClassName="selected" category="shots">Shots</NavLink>
                        </ol>
                    </div>
                    <div className="container">
                        <ItemListContainer />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;