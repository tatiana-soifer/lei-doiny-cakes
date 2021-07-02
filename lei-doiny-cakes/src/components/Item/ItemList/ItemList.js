import React from 'react';
import {useParams} from 'react-router';
import Item from '../Item';
import '../../css/Main.css';

const ItemList = ({items}) => {
    const { categoria } = useParams();
    return(
        <>
            {items
            .filter((item) => item.Categoria === categoria)
            .map((item) => (
            <div key={item.id}>
                <Item item={item} />
            </div>
            ))}
        </>
    );
};

export default ItemList;