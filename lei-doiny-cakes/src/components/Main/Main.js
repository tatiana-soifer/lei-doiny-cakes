import {BrowserRouter} from 'react-router-dom';
import ProductsContextProvider from '../Context/ProductsContext';
import CartContextProvider from '../Context/CartContext';
import Home from '../Containers/Home';
import NavHeader from '../NavBar/NavHeader';
import Footer from '../Sections/Footer';
import '../css/Main.css';

function Main() {
    return (
        <ProductsContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                <div className="mainContainer">
                    <NavHeader />
                    <Home />
                    <Footer />
                </div>
                </ BrowserRouter>
            </CartContextProvider>
        </ ProductsContextProvider>
    );
};

export default Main;