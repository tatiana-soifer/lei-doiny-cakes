import {useState, useEffect} from "react";
import Item from '../Item';
import '../css/Main.css';

function ItemList ({items}){
    return (
        <>
            {
                <div>{
                    items.map(item =>( 
                        <Item item={item} key={i} />
                    ))
                }
                </div>
            }
        </>
    );
};

export default ItemList;