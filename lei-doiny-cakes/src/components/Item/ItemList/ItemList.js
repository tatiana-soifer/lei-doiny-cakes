import React from 'react';
import {useParams} from 'react-router';
import Item from '../Item';
import '../../css/Main.css';

const ItemList = ({items}) => {
    const {category} = useParams();
    return(
        <>
            {items
            .filter((item) => item.category === category)
            .map((item) => (
                <div key={item.id}>
                    <Item item={item} />
                </div>
            ))}
        </>
    );
};

export default ItemList;