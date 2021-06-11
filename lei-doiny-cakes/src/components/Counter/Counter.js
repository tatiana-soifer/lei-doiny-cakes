import React, { useState } from 'react';
import './../css/Main.css';

const Counter = ({initialState, stock, onAdd}) => {
    const [items, setItems] = useState(initialState)
    const addItems = () => {
        if (items < stock){
            setItems (items + 1)
        }
        else {
            alert ('Lamentablemente no hay mas stock')
        };
    };
    const removeItems = () =>{
        if (items > 0 ) {
            setItems (items - 1)
        };
    };
    return (
        <div>
            <div className="boton_counter">
                <button className="btn btn-secondary boton" onClick={removeItems}>-</button>
                    <label>{items}</label>
                <button className="btn btn-secondary boton" onClick={addItems}>+</button>
            </div>
            <button id="boton_anadir" className="btn btn-secondary">Añadir</button>
        </div>
    );
};

export default Counter;
