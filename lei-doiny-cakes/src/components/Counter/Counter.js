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
    return (
        <div>
            <div>
                <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal">-</button>
                    <input>{items}</input>
                <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal" onClick={addItems}>+</button>
            </div>
            <button id="boton_anadir" className="btn btn-secondary" data-toggle="modal">Añadir</button>
        </div>
    );
};

export default Counter;
