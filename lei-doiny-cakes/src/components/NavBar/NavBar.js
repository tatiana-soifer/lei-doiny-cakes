import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import '../css/Main.css';

class Navbar extends Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState ({clicked: !this.state.clicked})
    }
    render() {
        return (
        <nav className="NavbarItems">
            <div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Carrito</Link>
                    <Link to="/register">Newsletter</Link>
                </ul>
                <p>Menu</p>
            </div>
            <div className="logo-container">
                <Link to="/">
                    <div >
                        <img src={logo} alt="logo"/>
                    </div>
                </Link>
            </div>
            <Link to="/register">
                <div className="nav-suscribe">
                    <i className="far fa-edit"></i>
                    <h3>Suscribite</h3>
                </div>
            </Link>
        </nav>
        )
    }
}

export default Navbar;