import React, {useState, createContext, useContext, useEffect,} from 'react';
import '../css/Main.css';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = {items: [], totalPrice:0}
const initialStateWish = {items:[]}; 

export const CartProvider = ({children}) => {
    function setLocalStorage(key, value) {
        try{
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch(e){
            console.log(e);
        }
    }  
    function getLocalStorage(key, initialValue) {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch (e){
            return initialValue;
        }
    }
    const [cartInfo, setCartInfo]= useState(() => getLocalStorage("cartInfo", initialState));
    const [wishList, setWishList] = useState(() => getLocalStorage("wishList", initialStateWish));
    useEffect(() => {
        setLocalStorage("cartInfo", cartInfo);
    }, [cartInfo]);
    useEffect(() => {
        setLocalStorage("wishList", wishList);
    }, [wishList]);
    const addItem = (description, photo,  quantity, price, id, stock) =>{
        const itemIndex = cartInfo.items.findIndex(i => id === i.item.id)
        if (itemIndex !== -1){
            return( setCartInfo({ ...cartInfo, items: [...cartInfo.items.slice(0,itemIndex), 
                {'item': {photo, id, price, stock}, "quantity":cartInfo.items[itemIndex].quantity + quantity}, 
                ...cartInfo.items.slice(itemIndex+1)]}));
        } else{
            setCartInfo({ ...cartInfo, items:[ ...cartInfo.items, {'item': {photo, id, price, description, stock}, quantity}]})
        }
        const newItem = [...cartInfo.items, {item: {id, price, description, photo, stock}, quantity}]
        setCartInfo({ ...cartInfo, items: newItem})
    }
    const addWishList = (title, price, photo, id, description ) =>{
        const itemIndex = wishList.items.findIndex(i => id === i.item.id)
        if (itemIndex !== -1){
            return( setWishList({ ...wishList, items: [ ...wishList.items.slice(0,itemIndex), 
                {'item': { title, price, photo, id, description }}, 
                ...wishList.items.slice(itemIndex+1) 
            ]}));
        } else{
            setWishList({ ...wishList, items:[ ...wishList.items, {'item': {title, price, photo, id, description}}]})
        }
        const newItem = [...wishList.items, {item: {title, price, photo, id, description}}]
        setWishList({ ...wishList, items: newItem})
    }
    const removeItems = (item) => {
        const cartWithoutItem = cartInfo.items.filter ((remove) => {
            return remove.item.id !== item.id
        }) 
        setCartInfo({...cartInfo, items: cartWithoutItem})
    }
    const clear = () => {
        setCartInfo(initialState)
    }
    const clearWishList = () => {
        setWishList(initialStateWish)
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
        <CartContext.Provider value={{cartInfo, wishList, addItem, removeItems, clear, totalPrice, totalQuantity, addWishList, clearWishList}}>{children}</CartContext.Provider>
    );
};