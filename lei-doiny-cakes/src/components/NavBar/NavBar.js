import logo from '../../assets/logo/logo.png';
import CardWidget from './CardWidget';
import '../css/Main.css';


function NavBar(){
    return(
        <div>
            <nav id="menu" className="navbar navbar-expand-lg fixed-top">
                <button id="boton_logo">
                    <img src={logo} id="logo" alt="logo" href="/Home" />
                </button>
                <button id="boton_navbar" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarTogglerDemo01" className="collapse navbar-collapse ml-auto">
                    <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                        <li className="nav-item">
                            <a className="navbar-brand" href="/Menu">Menú</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="/ComoComprar">Cómo comprar</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="/Contacto">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="/FAQ">FAQ</a>
                        </li>
                        <li>
                            <CardWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;