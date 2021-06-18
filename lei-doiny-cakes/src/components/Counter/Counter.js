import React, { useState } from 'react';
import './../css/Main.css';

const Counter = ({initialState, stock, onAdd}) => {
    const [count, setItems] = useState(initialState)
    const addItems = () => {
        if (count < stock){
            setItems (count + 1)
        }
        else {
            alert ('Lamentablemente no hay mas stock')
        };
    };
    const removeItems = () =>{
        if (count > 0 ) {
            setItems (count - 1)
        };
    };
    return (
        <div>
            <div className="boton_counter">
                <button className="btn btn-secondary boton" onClick={removeItems}>-</button>
                    <label>{count}</label>
                <button className="btn btn-secondary boton" onClick={addItems}>+</button>
            </div>
            <button id="boton_anadir" className="btn btn-secondary">Añadir</button>
        </div>
    );
};

export default Counter;
