import React from 'react';
import {Link, NavLink, withRouter}  from 'react-router-dom'
import logo from '../../assets/logo/logo.png';
import NavHamburguesa from './NavHamburguesa.js'
import '../css/Main.css';
class Navbar extends React.Component{
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <Link to="/" type="button">
                        <img id="logo" src={logo} alt="logo" />
                    </Link>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            =
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right justify-content-end">
                            <li id="navLi" className={this.getNavLinkClass("/")}>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li id="navLi" className={this.getNavLinkClass("/FAQ")}>
                                <NavLink to="/FAQ">FAQ</NavLink>
                            </li>
                            <li id="navLi" className={this.getNavLinkClass("/Nosotros")}>
                                <NavLink to="/Nosotros">Nosotros</NavLink>
                            </li>
                            <li id="navLi" className={this.getNavLinkClass("/Contacto")}>
                                <NavLink to="/Contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbarCards-icons btnCarrito">
                    <NavHamburguesa />
                </div>
            </nav>
        )
    }
};

Navbar = withRouter(Navbar);
export default Navbar;