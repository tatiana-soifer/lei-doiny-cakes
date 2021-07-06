import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../Item/ItemList/ItemListContainer';
import ItemDetailContainer from '../Item/ItemDetail/ItemDetailContainer';
import Home from '../Sections/Home';
import ComoComprar from '../Sections/ComoComprar';
import Contacto from '../Sections/Contacto';
import FAQ from '../Sections/FAQ';
import Nosotros from '../Sections/Nosotros';
import Cart from '../Context/Cart/Cart';
import CacheProvider from '../../providers/CacheProvider';
import '../css/Main.css';


function Main () {
    return (
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
        </BrowserRouter>
    );
};

export default Main;