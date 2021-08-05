import {BrowserRouter} from 'react-router-dom';
import ProductsContextProvider from '../Context/ProductsContext';
import CartContextProvider from '../Context/CartContext';
import Home from '../Containers/Home';
import NavBar from '../NavBar/NavBar';
import Footer from '../Sections/Footer';
import '../css/Main.css';

function Main(){
    return(
        <ProductsContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                <div className="mainContainer">
                    <NavBar />
                    <Home />
                    <Footer />
                </div>
                </ BrowserRouter>
            </CartContextProvider>
        </ ProductsContextProvider>
    );
};

export default Main;