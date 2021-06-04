import React from 'react';
import './Counter.css'
import '../Main/Main.css'

const Counter = ({initial, stock, onAdd}) => {
    const [initial, setItems] = useState(initial);
    const addItems = () => {
        if (items < stock) {
            setItems(items + 1)
        } else{
            alert ('Lamentablemente no hay mas stock')
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div>
                    <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal" onClick={addItems}>+</button>
                    <span>{items}</span>
                    <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal">-</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
