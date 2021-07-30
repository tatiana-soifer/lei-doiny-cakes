import React, {useState} from 'react';
import './../css/Main.css';

const Counter = ({stock, initial, onAdd}) => {
    const [stockRequired, setStockRequired] = useState(initial)
    const onAddCount = (value) => {
        if ((stock >= stockRequired + value) && ((stockRequired + value) >=0)) {
        setStockRequired(stockRequired + value)
        } else{
            }
    }
    const handleClick = () => {
        onAdd(stockRequired)
    }
    return (
        <div className="counter">
            <div className="boton_counter">
                <button className="btn btn-secondary boton" onClick={() => onAddCount(-1)}>-</button> 
                <h4>{stockRequired}</h4>
                <button className="btn btn-secondary boton" onClick={() => onAddCount(+1)}>+</button>
            </div>  
            <button id="boton_anadir" className="btn btn-secondary" onClick={handleClick} value={stockRequired}>Agregar al carrito</button> 
        </div>
    )
}

export default Counter; 