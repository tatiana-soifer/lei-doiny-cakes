
import Counter from '../Counter/Counter';
import '../css/Main.css';

function Item ({item}) {
    const onAdd = (count) => {
        if(count > 0) {
            console.log(`${count} productos comprados`);
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div>
                    <img src={item.Foto} alt={item.Torta} />
                </div>
                <div>
                    <h2>{item.Torta}</h2>
                    <h4>{item.Descripcion}</h4>
                    <h3>${item.Precio}</h3>
                    <Counter initialState={1} stock={15} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
};

export default Item;