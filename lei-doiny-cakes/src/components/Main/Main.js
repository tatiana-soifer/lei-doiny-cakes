import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../Item/ItemList/ItemListContainer';
import Home from '../Sections/Home';
import ComoComprar from '../Sections/ComoComprar';
import Contacto from '../Sections/Contacto';
import FAQ from '../Sections/FAQ';


function Main () {
    return (
        <BrowserRouter>
            <div className="Main">
                <NavBar />
                <ItemListContainer />
            </div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/comoComprar'>
                    <ComoComprar />
                </Route>
                <Route exact path='/contacto'>
                    <Contacto />
                </Route>
                <Route exact path='/FAQ'>
                    <FAQ />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Main;