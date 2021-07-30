import React from 'react';
import {useCart} from '../Context/CartContext.js';
import '../css/Main.css';

function CartContent({item, quantity}){
    const price = item.price
    const totalPriceProduct =  price * quantity; 
    const {removeItems} = useCart()
    const remover =(item)=>{
        removeItems(item)
    }
    return (
        <>
            {quantity === 0? (
                <h1>No hay productos agregados</h1>
            ): (
                <>
                    <div className="container-cardContenido">
                        <img src={item.photo} alt={item.title} />
                        <h2>{item.description}</h2> 
                        <h3>$ {price}</h3>
                        <h3>{quantity}</h3>
                        <h2> ${totalPriceProduct}</h2>
                    </div>
                    <button className="btn btn-second" onClick={()=>remover(item)}>Borrar producto</button>
                </>
            )}
        </>
    )
}

export default CartContent;