import './../css/Main.css';


const Counter = ({initial, stock, onAdd}) => {
    
    return (
        <div>
            <div>
                <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal">+</button>
                    <span></span>
                <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal">-</button>
            </div>
            <button id="boton_anadir" className="btn btn-secondary" data-toggle="modal" >Añadir</button>
        </div>
    );
}

export default Counter;
