import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartProvider} from '../Cart/CartContext.js';
import NavBar from '../NavBar/NavBar.js';
import NavProductos from '../Sections/NavProductos.js';
import ItemListContainer from '../Item/ItemList/ItemListContainer.js';
import ItemDetailContainer from '../Item/ItemDetail/ItemDetailContainer.js';
import Home from '../Sections/Home.js';
import ComoComprar from '../Sections/ComoComprar.js';
import Contacto from '../Sections/Contacto.js';
import FAQ from '../Sections/FAQ.js';
import Nosotros from '../Sections/Nosotros.js';
import Cart from '../Cart/Cart.js';
import CheckOut from '../Cart/CheckOut.js';
import Footer from '../Sections/Footer.js';
import Register from '../Sections/Register.js';
import '../css/Main.css';


function Main () {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <NavProductos />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/comoComprar">
                        <ComoComprar />
                    </Route>
                    <Route exact path="/category/:category">
                        <ItemListContainer />
                    </Route>               
                    <Route exact path="/productDetail/:pid">
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path="/Contacto">
                        <Contacto/>
                    </Route>
                    <Route exact path="/FAQ">
                        <FAQ />
                    </Route>
                    <Route exact path="/Nosotros">
                        <Nosotros />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/cart/CheckOut">
                        <CheckOut />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
};

export default Main;