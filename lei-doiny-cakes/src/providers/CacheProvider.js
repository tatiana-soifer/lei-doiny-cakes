import React, {useState} from 'react';
import CartContext from '../components/Context/Cart/CartContext';

const CacheProvider = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState (defaultValue);
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart([...cart, {item, quantity}]);
        }
        else {
            let item = cart.find(x => x.item.id === item.id);
            item.quantity += quantity;
            setCart(cart.map (item => 
                item.item.id === item.id 
                ? {...item.item, quantity : item.quantity} 
                : item
            ));
        };
    };
    const removeItem = (id) => {
        if(isInCart(id)){ }
    };
    const clear = () => {
        setCart([]);
    };
    const isInCart = (id) => {
        return getFromCart(id);
    };
    const getFromCart = (id) => {
        return cart.find (x => x.item.id === id);
    };
    return (
        <CartContext.Provider value = {{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CacheProvider;