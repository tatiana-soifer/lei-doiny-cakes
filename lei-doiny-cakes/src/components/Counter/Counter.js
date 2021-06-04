import './Counter.css'
import '../Main/Main.css'

const Counter = ({initial, stock, onAdd}) => {
    const [items, setItems] = useState (initial);
    const addItems = () => {
        if (items < stock) {
            setItems(items + 1)
        } else{
            alert ('Lamentablemente no hay mas stock')
        }
    };
    const lessItems = () =>{
        setItems(items - 1)
    }
    return (
        <div className="container">
            <div className="row">
                <div>
                    <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal" onClick={addItems}>+</button>
                    <span>{items}</span>
                    <button id="boton_counter" className="btn btn-secondary boton" data-toggle="modal" onClick={lessItems}>-</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
