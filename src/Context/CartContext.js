import React, { useContext, useState } from 'react'


const CartContext = React.createContext([]);

 export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([]);

    const addProduct = (Item, quantity) => {
        if(isInCart(Item.id)) {
            setCart(cart.map(product => {
                return product.id === Item.id ? { ...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCart([...cart, { ...Item, quantity}]);
        }
    }

    console.log ('carrito:', cart);

    const clearCart =() => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    

  return (
    <div>
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider