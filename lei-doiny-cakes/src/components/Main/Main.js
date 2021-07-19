import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import ItemListContainer from '../Item/ItemList/ItemListContainer.js';
import ItemDetailContainer from '../Item/ItemDetail/ItemDetailContainer.js';
import Home from '../Sections/Home.js';
import ComoComprar from '../Sections/ComoComprar.js';
import Contacto from '../Sections/Contacto.js';
import FAQ from '../Sections/FAQ.js';
import Nosotros from '../Sections/Nosotros.js';
import Cart from '../Cart/Cart.js';
import CacheProvider from '../../providers/CacheProvider.js';
import Footer from '../Sections/Footer.js';
import '../css/Main.css';


function Main () {
    return (
        <>
            <BrowserRouter>
                <CacheProvider>
                    <NavBar />
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
                        <Route exact path="/item/:id">
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
                    </Switch>
                </CacheProvider>
                <>
                    <Footer />
                </>
            </BrowserRouter>
        </>
    );
};

export default Main;