import React from 'react'
import cart from '..//CartWidget/cart.svg'
import { useCartContext } from '../../Context/CartContext'




 const CartWidget = () => {

    const{totalProducts} = useCartContext();

  return (
    <div>
        <img src={cart} alt= 'cart'/>
        <span>{totalProducts() || ''}</span>
    </div>
  )
}

export default CartWidget