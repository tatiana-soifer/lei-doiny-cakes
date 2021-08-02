import {Link} from 'react-router-dom';
import {useCart} from '../Cart/CartContext.js';
import '../css/Main.css';

const Cartwidget = () => {
    const cartInfo = useCart()
    const {totalQuantity} = useCart()
    const totalQuantitys = () => {
        return totalQuantity() 
        }
    if (cartInfo.cartInfo.items.length === 0) return <h1> </h1>
    return (
        <>
            <Link to="/cart">
                <p> {totalQuantitys()} </p>
            </Link>
        </>
    )
};

export default Cartwidget;