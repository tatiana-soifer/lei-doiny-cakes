import React from 'react';
import {useCart} from '../context/CartContext.js';
import CartWishListContent from './CartWishListContent.js';
import '../css/Main.css';

function CartWishList(){
    const wishList = useCart()
    const wishListItems = wishList.wishList.items;
    const clearProducts = () => {
        wishList.clearWishList()
    }
    return(
        <div className="container-wishList">
            <h2>Lista de deseos</h2>
            {wishListItems.length === 0? (<h1>No hay productos agregados</h1>
                ): (
                    <div className="container-itemsWL">
                        {wishListItems?.map ((i) => {
                            return(
                                <>
                                <div key= {i.item.id} className="container-item-detail">
                                    <img src= {i.item.photo} alt={i.item.title} />
                                    <div className="info-item-details" >
                                        <h1>{i.item.title}</h1>
                                        <p>{i.item.description}</p>
                                        <p className="price-detail"> <span>$</span> {i.item.price} </p>
                                            <CartWishListContent pid= {i.item.id} />
                                    </div>
                                </div>
                                </>
                            )
                        })}
                        <button className="btn btn-vaciar" onClick={clearProducts}>Vaciar Wish List</button>
                    </div>
                )
            }
        </div>
    );
};

export default CartWishList;