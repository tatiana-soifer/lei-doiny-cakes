import React from 'react';
import {useCartContext} from '../Context/CartContext';
import CartEachProduct from '../CartEachProducts/CartEachProducts';

const ProductsContainer = () => {
    const {cartList} = useCartContext();
    //SI EL CARRITO ESTA VACIO
    if(cartList.length === 0){
        return(
            <p>Tu carrito está vacío.</p>
        )
    }
    return(
        //CASO CONTRARIO MOSTRAR LOS PRODUCTOS
        cartList.map((item, i) => {
            return(
                <li>
                    <CartEachProduct prod={item}/>
                </li>)
        })
    );
};

export default ProductsContainer;