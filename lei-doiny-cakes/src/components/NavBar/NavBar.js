import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import {useCartContext} from '../Context/CartContext';
import Home from '../Containers/Home';
import Contacto from '../Sections/Contacto';
import Nosotros from '../Sections/Nosotros';
import Cart from '../Containers/Cart';
import OrderContainer from '../Containers/OrderContainer';
import ProductDetailContainer from '../Containers/ProductDetailContainer';
import logo from '../../assets/logo/logo.png';
import '../css/Main.css';

const NavBar = () => {
  const {cartAmount} = useCartContext();
  return(
    <>
      <ul className="nav main-nav">
        <li>
          <NavLink to="/">
            <img src={logo} id="logo" alt="logo" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/nosotros" className="nav-link" activeClassName="active">Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/contacto" className="nav-link" activeClassName="active">Contacto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/cart" className="nav-link" activeClassName="active">
            <p>({cartAmount})
              <i className="fas fa-shopping-cart"></i>
            </p>
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/cart" component={Cart} />
        <Route path="/orden" component={OrderContainer} />
        <Route exact path="/:id" component={ProductDetailContainer} />
      </Switch>
    </>
  );
};

export default NavBar;