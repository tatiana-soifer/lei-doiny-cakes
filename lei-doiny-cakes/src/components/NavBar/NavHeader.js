import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import '../css/Main.css';

function NavHeader(){
    return(
        <header>
            <div className="barra">
                <img src={logo} id="logo" alt="logo" />
                <nav>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarTogglerDemo01" className="collapse navbar-collapse" >
                        <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/menu">Menú</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavHeader;