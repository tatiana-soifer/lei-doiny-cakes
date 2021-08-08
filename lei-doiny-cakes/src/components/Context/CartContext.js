import React, {createContext, useContext, useState} from 'react';

//CREACION DEL CONTEXTO
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
const CartContextProvider = ({children}) => {
    //VARIABLES Y MODIFICADORES
    const [cartList, setCartList] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    //MODIFICADOR PARA ABRIR Y CERRAR LOS MODALES
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //OBTENER ID DEL PRODUCTO EN EL CARRITO
        const getFromCart = id => {
            return cartList.find(product => product.id === id);
        }
    //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
    const addProduct = (product) => {
    //VERIFICAR SI EL PRODUCTO ESTA EN EL CARRITO
        const productInCart = getFromCart(product.id)
        if(!!productInCart){
            //ESTA EN EL CARRITO
            if(product.stock > productInCart.amount) {
                setCartList(
                    cartList.map((p) => p.id === product.id ? {...p, amount: p.amount + 1} : p)
                );
            } else {
                //SI SE ALCANZO EL STOCK DISPONIBLE, ABRIR EL MODAL CON EL MENSAJE Y TERMINAR LA EJECUCION DE LA FUNCION
                setShow(true)
                return
            }
        } else {
            //EL PRODUCTO NO ESTA EN EL CARRITO 
            //AGREAR PRODUCTO CON UNA UNIDAD
            setCartList(cartList.concat([{...product, amount: (1)}]));
        };
        //ACTUALIZAR EL PRECIO Y LA CANTIDAD EN EL CARRITO
        setTotalPrice(totalPrice + product.price);
        setCartAmount(cartAmount + 1);
    };
    //AGREAR PRODUCTO CON UNA UNIDAD
    //ELIMINAR PRODUCTOS DEL CARRITO
    const removeProduct = (product) => {
        //VERIFICAR SI EL PRODUCTO ESTA EN EL CARRITO
        const productInCart = getFromCart(product.id);
        if(productInCart.amount > 1) {
            //SI EL PRODUCTO TIENE MAS DE 2 UNIDADES RESTARLE UNA
            console.log('Hay mas de una unidad de ese producto');
            setCartList(
                cartList.map((p) => p.id === product.id ? {...p, amount: p.amount - 1 } : p )
            );
            //SI HAY UNA SOLA UNIDAD, ENTONCES SACARLO DEL CARRITO
        } else {
            setCartList(cartList.filter(p => p.id !== product.id));
        };
        //ACTUALIZAR EL PRECIO Y LA CANTIDAD DE ITEMS EN EL CARRITO
        setTotalPrice(totalPrice - product.price);
        setCartAmount(cartAmount - 1);
    };
    return(
        <CartContext.Provider value={{addProduct, totalPrice, cartAmount, removeProduct, cartList,setCartAmount, setCartList, setTotalPrice, show, handleClose, handleShow}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;