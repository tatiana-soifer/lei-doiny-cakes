import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProductList from '../Item/Item';
import ItemListContainer from '../Item/ItemList/ItemListContainer';


function Main () {
    return (
            <div className="Main">
                <NavBar />
                <ItemListContainer />
            </div>
    )
};

export default Main;