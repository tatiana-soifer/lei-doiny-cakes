import React, {useContext} from "react";
import {NavLink, Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import CartWidget from '../NavBar/CartWidget';
import CartContext from '../Context/Cart/CartContext';
import '../css/Main.css';

const NavBar = () => {
    const {cart} = useContext(CartContext);
    let cartQuantity = cart.reduce(function(previous, currently) {
        return previous + currently.quantity;
    }, 0);
    return(
        <header>
            <nav class="navbar navbar-expand-lg fixed-top fondo_presentacion fondo_nav justify-content-end">
                <Link to="/">
                    <img id="logo" src={logo} alt="logo" />
                </Link>
                <ul className="nav-items">
                    <li className="navbar-brand">
                        <NavLink to="/" activeClassName="selected" className="nav-link">Menú</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to="/ComoComprar" activeClassName="selected" className="nav-link">Cómo comprar</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to="/Contacto" activeClassName="selected" className="nav-link">Contacto</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to="/FAQ" activeClassName="selected" className="nav-link">FAQ</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <CartWidget cartLength={cartQuantity}/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;