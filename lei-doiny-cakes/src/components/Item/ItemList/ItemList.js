import React from 'react';
import Item from '../Item';
import '../../css/Main.css';

const ItemList = ({items}) => {
    return (
        <div className="container">
            <div className="row">
                {items.map((item, i) => {
                    return(
                        <Item item={item} key={i} />
                    )
                })};
            </div>
        </div>
    );
};

export default ItemList;