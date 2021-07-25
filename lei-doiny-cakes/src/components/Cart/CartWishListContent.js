import React from 'react';
import {Link} from 'react-router-dom';


function CartWishListContent (pId) {
    const id = pId.pId;
    return (
        <> 
            <Link to={`/itemDetail/${id}`}>
                <button className="btn">Lo llevo</button>
            </Link>
        </>
    );
};

export default CartWishListContent;