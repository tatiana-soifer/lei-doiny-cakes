import './navBar.scss'


function navBar () {
    return (
        //LOGO
        <img src="../img/logo.png" alt="logo" />
        //NAVBAR
        <nav>
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
                    <li className="nav-item">
                        <button id="carrito_menu" type="button" className="btn" data-toggle="modal" data-target="#exampleModal">
                            <img src="../../../" alt="carrito de compras" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default navBar;