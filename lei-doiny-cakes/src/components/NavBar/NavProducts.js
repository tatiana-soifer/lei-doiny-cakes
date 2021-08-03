import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Home from '../Containers/Home';
import Cart from '../Containers/Cart';
import OrderContainer from '../Containers/OrderContainer';
import ProductDetailContainer from '../Containers/ProductDetailContainer';
import {useCartContext} from '../Context/CartContext';
import '../css/Main.css';

const NavBar = () => {
    const {cartAmount} = useCartContext();
    return (
        <div>
          <ul className="nav main-nav justify-content-center">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/cart" className="nav-link" activeClassName="active"><p>({cartAmount}) <i class="fas fa-shopping-cart"></i></p></NavLink>
            </li>
          </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/orden" component={OrderContainer}/>
          <Route exact path="/:id" component={ProductDetailContainer}/>
        </Switch>
      </div>
    );
};

export default NavBar;