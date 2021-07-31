import React, {useState, createContext, useContext, useEffect} from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const initialState = {items: [], totalPrice: 0}

export const CartProvider = ({children}) => {
    function setLocalStorage(key, value){
        try{
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch(e){
            console.log(e);
        }
    }  
    function getLocalStorage(key, initialValue){
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch (e){
            return initialValue;
        }
    }
    const [cartInfo, setCartInfo]= useState(() => getLocalStorage("cartInfo", initialState));
    useEffect(() => {
        setLocalStorage("cartInfo", cartInfo);
    }, [cartInfo]);
    const addItem = (description, photo,  quantity, price, id, stock) => {
        const itemIndex = cartInfo.items.findIndex(i => id === i.item.id)
        if (itemIndex !== -1){
            return( 
                setCartInfo({
                    ...cartInfo, items: [ 
                        ...cartInfo.items.slice(0,itemIndex), 
                        {'item': {photo, id, price, stock}, 'quantity':cartInfo.items[itemIndex].quantity + quantity}, 
                        ...cartInfo.items.slice(itemIndex+1)
                    ]
                })
            );
        } else{
            setCartInfo({ ...cartInfo, items:[ ...cartInfo.items, {'item': {photo, id, price, description, stock}, quantity}]})
        }
        const newItem = [...cartInfo.items, {item: {id, price, description, photo, stock}, quantity}]
        setCartInfo({...cartInfo, items: newItem})
    }
    const removeItems = (item) => {
        const cartWithoutItem = cartInfo.items.filter((remove) => {
            return remove.item.id !== item.id
        }) 
        setCartInfo({...cartInfo, items: cartWithoutItem})
    }
    const clear = () => {
        setCartInfo(initialState)
    }
    const totalQuantity = () => {
        const sumaquantity = cartInfo.items.reduce((counter, item) => (counter + item.quantity), 0)
        return sumaquantity 
    }
    const totalPrice = () => {
        const sumaPrices = cartInfo.items.reduce((counter, item) => (counter + item.item.price * item.quantity), 0)
        return sumaPrices
    }
    return (
        <CartContext.Provider value={{cartInfo, addItem, removeItems, clear, totalPrice, totalQuantity}}>{children}</CartContext.Provider>
    );
};

export default CartContext;