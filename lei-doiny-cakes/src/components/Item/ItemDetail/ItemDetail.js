import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useCart} from '../../Context/CartContext.js';
import Counter from '../../Counter/Counter.js';
import corazon from '../../../assets/icons/corazon.png'
import '../../css/Main.css';

function ItemDetail({photo, title, price, description, id, stock, key}) {
    const [eventItem, setEventItem] = useState (0);
    const [wishEvent, setWishEvent]= useState(0)
    const {addItem, addWishList} = useCart()
    const onAddItem = (e) => {
    setEventItem(e)
    addItem(title, photo, e, price, id, stock)
    }
    const handleClick =(e) => {
    setWishEvent(e)
    addWishList(title, price, photo, id, description)
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
                            <Counter value={eventItem} onAdd={onAddItem} stock={stock} initial={1}></Counter> 
                            : 
                                <div className="buttons-item-detail">
                                    <Link to="/cart" className="btn">Lo llevo</Link>
                                </div>
                        }
                        {wishEvent ===0?
                            <button className="icon-item-detail" onClick={handleClick}>
                                <img src={corazon} alt="corazon" />
                            </button> 
                            :
                            <div className="wishList-msj"> 
                                <p>El producto se agregó a tu lista de deseos!</p>
                                <Link to="/cartwishlist" className="btn btn-second">Ir a lista de deseos</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;