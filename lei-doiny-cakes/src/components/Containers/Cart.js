import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/CartContext';
import Title from '../Title/Title';
import CartProductsContainer from './CartProductsContainer';

const Cart = () => {
  // VARIABLES DEL CART CONTEXT
    const {cartAmount, totalPrice} = useCartContext();
    //SI EL CARRITO TIENE PRODUCTOS MOSTRAR:
    if (cartAmount > 0) {
      return(
        <div>
          <Title title="Carrito" />
          <ul className="cart-list-container">
            <CartProductsContainer />
            <div className="divider"></div>
          </ul>
          <h4>$ {totalPrice}</h4>
          <Link to={`/orden`}>
            <button className="primary">Confirmar Pedido</button>
          </Link>
        </div>
      );
    };
    //CASO CONTRARIO, SI NO HAY PRODUCTOS MOSTRAR:
    return(
      <div>
          <Title title="Carrito" />
          <div className="detail-container">
            <p>No tenés ningún producto en el carrito</p>
          </div>
      </div>
  );
};

export default Cart;