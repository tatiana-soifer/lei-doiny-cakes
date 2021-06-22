import {NavLink, Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import CardWidget from './CardWidget';
import '../css/Main.css';


function NavBar(){
    return(
        <div id="menu" className="navbar navbar-expand-lg fixed-top">
            <Link id="boton_logo" to={'/'}>
                <img src={logo} id="logo" alt="logo" />
            </Link>
            <button id="boton_navbar" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav id="navbarTogglerDemo01" className="collapse navbar-collapse ml-auto">
                <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                    <li className="nav-item">
                        <NavLink className="navbar-brand" activeClassName="active" to={'/'}>Menú</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navbar-brand" activeClassName="active" to={'/ComoComprar'}>Cómo comprar</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navbar-brand" activeClassName="active" to={'/Contacto'}>Contacto</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navbar-brand" activeClassName="active" to={'/FAQ'}>FAQ</NavLink>
                    </li>
                    <li>
                        
                        <CardWidget />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;