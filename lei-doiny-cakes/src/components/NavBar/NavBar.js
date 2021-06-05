import logo from '../../assets/logo/logo.png';
import CardWidget from './CardWidget';
import '../css/Main.css';


function NavBar(){
    return(
        <div>
            <nav id="menu" className="navbar navbar-expand-lg fixed-top">
                <img src={logo} alt="logo" id="logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                        <li className="nav-item">
                            <a className="navbar-brand" href="#menu">Menú</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#como_comprar">Cómo comprar</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#contacto">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#FAQ">FAQ</a>
                        </li>
                    </ul>
                </div>
                <CardWidget />
            </nav>
        </div>
    );
}

export default NavBar;