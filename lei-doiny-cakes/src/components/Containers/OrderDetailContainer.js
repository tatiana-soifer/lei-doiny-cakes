import React from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';
import {useCartContext} from '../Context/CartContext';

const OrderDetailContainer = () => {
    const {cartList} = useCartContext();
    return (
        cartList.map((item, i) => {
            return <li key={i}>
                <OrderDetail prod={item}/>
            </li>
        })
    )
}

export default OrderDetailContainer;