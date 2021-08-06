import React from 'react';
import {useCartContext} from '../Context/CartContext';
import OrderDetail from '../OrderDetail/OrderDetail';

const OrderDetailContainer = () => {
    const {cartList} = useCartContext();
    return (
        cartList.map((item, i) => {
            return (
            <li key={i}>
                <OrderDetail prod={item}/>
            </li>)
        })
    );
};

export default OrderDetailContainer;