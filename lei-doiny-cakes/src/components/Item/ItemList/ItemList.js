import Item from '../Item';
import '../../css/Main.css';

function ItemList ({items}){
    return (
        <>
            {
                <div className="container">
                    <div className="row">
                    {
                        items.map(item =>( 
                            <Item item={item} key={item.Id} />
                        ))
                    }
                    </div>
                </div>
            }
        </>
    )
};

export default ItemList;