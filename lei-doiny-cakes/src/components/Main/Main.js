import React from 'react';
import NavBar from '../NavBar/NavBar';
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