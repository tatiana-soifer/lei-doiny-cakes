import './Counter.css'
import '../Main/Main.css'

const Counter = ({initial, stock, onAdd}) => {
    
    return (
        <div>
            <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal">+</button>
                <span></span>
            <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal">-</button>
        </div>
    );
}

export default Counter;
