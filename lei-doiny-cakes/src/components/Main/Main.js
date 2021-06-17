import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../Item/ItemList/ItemListContainer';
import Home from '../Sections/Home';
import ComoComprar from '../Sections/ComoComprar';
import Contacto from '../Sections/Contacto';
import FAQ from '../Sections/FAQ';
import Nosotros from '../Sections/Nosotros';
import GetItems from '../Item/ItemDetail/ItemDetailContainer';
import '../css/Main.css'


function Main () {
    return (
        <BrowserRouter>
            <div className="Main">
                <NavBar />
            </div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/comoComprar'>
                    <ComoComprar />
                </Route>
                <Route exact path='/Menu'>
                    <ItemListContainer />
                    <GetItems />
                </Route>
                <Route exact path='/Contacto'>
                    <Contacto />
                </Route>
                <Route exact path='/FAQ'>
                    <FAQ />
                </Route>
                <Route exact path='/Nosotros'>
                    <Nosotros />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Main;