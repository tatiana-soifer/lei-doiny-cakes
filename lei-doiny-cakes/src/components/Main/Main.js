import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import ProductsContextProvider from '../Context/ProductsContext';
import CartContextProvider from '../Context/CartContext';
import Home from '../Containers/Home';
//import NavBar from '../NavBar/NavBar';
import '../css/Main.css';

function Main() {
    return (
        <ProductsContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                <div className="App container">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <Home />
                </div>
                </ BrowserRouter>
            </CartContextProvider>
        </ ProductsContextProvider>
    );
};

export default Main;