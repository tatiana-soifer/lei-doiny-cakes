import React from 'react';
import '../css/Main.css';

const Cart = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="cart">
                    <div className="cartHeader">
                        <h2>Carrito de Compras</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="cartBody">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody class="tbody"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;

