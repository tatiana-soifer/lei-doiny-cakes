import React from 'react';
import {Link} from 'react-router-dom';
import AcordionNavBar from './AcordionNavBar';
import '../css/Main.css';

const NavProductos = () => {
    return(
        <div className="NavBarCards-container">
            <div className="navBarCards-btn">
                <Link to="/" className="btn categoria">Todos</Link>
                <Link to="/category/tortas" className="btn categoria">Tortas</Link>
                <Link to="/category/desayunoMerienda" className="btn categoria">Desayunos y Meriendas</Link>
                <Link to="/category/letterCakes" className="btn categoria">Letter Cakes</Link>
                <Link to="/category/shots" className="btn categoria">Shots</Link>
            </div>
            <div className="navbarCards-icons">
                <AcordionNavBar />
            </div>
        </div>
    )
};

export default NavProductos;