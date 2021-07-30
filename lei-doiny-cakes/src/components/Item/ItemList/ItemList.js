import Item from '../Item.js';
import '../../css/Main.css';

const ItemList = (itemContent) => {
    return(
        <div className="cards-container">
            {itemContent.children?.map(i => {
                return(
                    <Item title={i.title} photo={i.photo} pId={i.id} category={i.category} price={i.price} id={i.id} key={i.id}/>
                )
            })}
        </div>
    );
};

export default ItemList;