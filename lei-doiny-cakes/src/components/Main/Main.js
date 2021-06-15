import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Home from '../Home';
import ComoComprar from '../ComoComprar';
import FAQ from '../FAQ';
import Contacto from '../Contacto';

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
            <Route exact path='/contacto'>
              <Contacto />
            </Route>
            <Route exact path='/FAQ'>
              <FAQ />
            </Route>
          </Switch>
    </BrowserRouter>
  );
};

export default Main;
