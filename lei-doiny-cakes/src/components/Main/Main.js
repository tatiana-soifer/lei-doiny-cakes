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
import '../css/Main.css'


function Main () {
    return (
        <BrowserRouter>
            <div className="Main">
                <NavBar />
            </div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/comoComprar" component={ComoComprar}></Route>
                <Route exact path="/category/:category" component={ItemListContainer}></Route>               
                <Route exact path="/item/:id" component={ItemDetailContainer}></Route>
                <Route exact path="/Contacto" component={Contacto}></Route>
                <Route exact path="/FAQ" component={FAQ}></Route>
                <Route exact path="/Nosotros" component={Nosotros}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Main;