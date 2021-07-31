import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useCart} from '../../Cart/CartContext.js';
import Counter from '../../Counter/Counter.js';
import '../../css/Main.css';

function ItemDetail({photo, title, price, description, id, stock, key}) {
    const [eventItem, setEventItem] = useState (0);
    const {addItem} = useCart()
    const onAddItem = (e) => {
        setEventItem(e)
        addItem(title, photo, e, price, id, stock)
    }
    return(
        <div key= {id} className="container">
            <div className="row">
                <div className="col-lg-10">
                    <div className="col-lg-6 left-side-product-box pb-3 productoItem">
                        <img alt={title} src={photo} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h1>{title}</h1>
                        <h5>{description}</h5>
                        <h4><span>$</span> {price}</h4>
                        <h4>Cantidad:</h4>
                        {eventItem ===0?
                            <Counter value={eventItem} onAdd={onAddItem} stock={stock} initial={1} />
                            : 
                                <div className="buttons-item-detail">
                                    <Link to="/cart" className="btn">Me lo llevo</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;