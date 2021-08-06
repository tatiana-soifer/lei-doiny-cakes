import React from 'react';

const OrderDetail = ({prod}) => {
    return(
        <div className="orderDetail">
            <li>{prod.title} x {prod.amount}</li>
        </div>
    );
};

export default OrderDetail;